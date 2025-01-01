import { OpenAPI3 } from "openapi-typescript";
import { writeFile } from "./fileUtils";

export function createApisFile(nestedApis: MyTreeNodeType, config: ConfigType, configDir: string) {
    let content =
        `${config["apis"]["firstLine"]}\n\n` + `export const Apis = {\n`;
    content += _createApisFile(nestedApis[config["module"]], 1);
    content += `}`;
    writeFile(config, configDir, "Apis.ts", content);
}

export function createApiTypesFile(
    nestedApis: MyTreeNodeType,
    config: ConfigType,
    configDir: string
) {
    let content = `declare namespace ApiTypes {\n`;
    content += _createApiTypesFile(nestedApis[config["module"]], 1);
    content += `}\n`;
    writeFile(config, configDir, "ApiTypes.d.ts", content);
}

export function createEnumsFile(openapi: OpenAPI3, config: ConfigType, configDir: string) {
    const enums = openapi["x-enum"] as XEnumType | undefined;
    if (enums == undefined) return;
    let data = ``;
    for (const [key, schema] of Object.entries(enums)) {
        data += `// ${schema.title}\n`;
        data += `export const ${key}= {\n`;
        schema.properties.map((prop) => {
            data += `  '${prop.value}': ${JSON.stringify({
                text: prop.label,
                color: prop.color,
                value: prop.value,
            })}, \n`;
        });
        data += `};\n\n`;
    }
    writeFile(config, configDir, "Enums.ts", data);
}

function _createApisFile(node: MyTreeNodeType, level: number) {
    let content = "";
    const tab = "  ".repeat(level);
    for (const [key, value] of Object.entries(node)) {
        if (value.path) {
            value.tags.shift();
            const typeString = ["ApiTypes", ...value.tags].join(".");
            const hasParams = value.params.length > 0;
            const isDownload = value.isDownload ? "responseType: 'blob'," : "";
            if (hasParams) {
                const isRequired = value.required.length > 0 ? "" : "?";
                content += `${tab}${key}(data${isRequired}: ${typeString}): Promise<MyResponseType> {\n`;
                content += `${tab}  return request('${value.path}', { ${isDownload}data });\n`;
                content += `${tab}},\n`;
            } else {
                content += `${tab}${key}(): Promise<MyResponseType> {\n`;
                content += `${tab}  return request('${value.path}', {${isDownload}});\n`;
                content += `${tab}},\n`;
            }
        } else {
            content += `${tab}${key}: {\n`;
            content += _createApisFile(value, level + 1);
            content += `${tab}},\n`;
        }
    }
    return content;
}

function _createApiTypesFile(node: MyTreeNodeType, level: number) {
    const tab = "  ".repeat(level);
    let content = "";
    for (const [key, value] of Object.entries(node)) {
        if (value.path) {
            if (value.params.length == 0) continue;
            content += `${tab}type ${key} = {\n`;
            value.params.forEach((param: MyNodeType["params"][0]) => {
                const required = param.required ? "" : "?";
                content += `${tab}  "${param.name}"${required}: ${param.type}; // ${param.description} \n`;
            });
            content += `${tab}};\n`;
        } else {
            content += `${tab}namespace ${key} {\n`;
            content += _createApiTypesFile(value, level + 1);
            content += `${tab}}\n`;
        }
    }
    return content;
} 