import { OpenAPI3 } from "openapi-typescript";
import { pascal } from "radash";

export async function fetchOpenApi(config: ConfigType): Promise<OpenAPI3> {
    const response = await fetch(config.url);
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(`获取 OpenAPI 文档： ${config.url} 成功。`);
    return data as OpenAPI3;
}

export function createNestedStructure(openapi: OpenAPI3) {
    const root: MyTreeNodeType = {};
    openapi.tags?.forEach((tag: { name: string }) => {
        const parts = tag.name.replace(/Controller$/, "").split("/");
        let currentLevel: MyTreeNodeType = root;
        parts.forEach((part: string) => {
            if (!currentLevel[part]) currentLevel[part] = {};
            currentLevel = currentLevel[part];
        });
    });
    return root;
}

export function createNestedApis(
    openapi: OpenAPI3,
    nestedStructure: MyTreeNodeType
) {
    // 读取接口定义
    for (const [path, methods] of Object.entries(openapi.paths ?? {})) {
        for (const [, content] of Object.entries(methods as Record<string, any>)) {
            const tags = content.tags[0].replace(/Controller$/, "").split("/");
            const isDownload = content["x-is-download"] ?? false;
            let currentLevel = nestedStructure;
            tags.forEach((tag: string, index: number) => {
                currentLevel = currentLevel[tag] as MyTreeNodeType;
                if (index === tags.length - 1) {
                    const name = pascal(content.summary);
                    const params: MyNodeType["params"] = [];
                    const required: MyNodeType["required"] = [];
                    if (content.requestBody) {
                        const properties =
                            content["requestBody"]["content"][
                            "application/x-www-form-urlencoded"
                            ]["schema"]["properties"] ?? null;
                        if (properties) {
                            Object.keys(properties).forEach((key) => {
                                if (key.includes("*")) return;
                                params.push({
                                    name: key,
                                    type: parsePhpTypeToJsType(properties[key].type),
                                    description: properties[key].description,
                                    required: properties[key].required,
                                });
                                if (properties[key].required) required.push(key);
                            });
                        }
                    }
                    currentLevel[name] = {
                        path,
                        tags: [...tags, name],
                        params,
                        required,
                        isDownload,
                    };
                }
            });
        }
    }
    return nestedStructure;
}

function parsePhpTypeToJsType(typeName: string) {
    switch (typeName) {
        case "array":
            return "string[]";
        case "integer":
        case "numeric":
            return "number";
        case "file":
        case "image":
            return "File";
        case "date":
            return "Date";
        default:
            return typeName;
    }
} 