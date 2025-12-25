import { OpenAPI3 } from "openapi-typescript";
import { writeFile } from "./fileUtils";
import { replace } from "radash";

/**
 * 生成 API 调用文件
 * @param params.nestedApis - 嵌套的 API 结构
 * @param params.config - 配置信息
 * @param params.configDir - 配置文件所在目录
 */
export function createApisFile(params: {
    nestedApis: MyTreeNodeType;
    config: ConfigType;
    configDir: string;
}) {
    const { nestedApis, config, configDir } = params;
    let content =
        `${config["apis"]["firstLine"]}\n\n` + `export const Apis = {\n`;
    content += _createApisFile(nestedApis[config["module"]], 1);
    content += `}`;
    writeFile({ config, configDir, fileName: "Apis.ts", fileContent: content });
}

/**
 * 生成 API 类型定义文件
 * @param params.nestedApis - 嵌套的 API 结构
 * @param params.config - 配置信息
 * @param params.configDir - 配置文件所在目录
 */
export function createApiTypesFile(params: {
    nestedApis: MyTreeNodeType;
    config: ConfigType;
    configDir: string;
}) {
    const { nestedApis, config, configDir } = params;
    let content = `declare namespace ApiTypes {\n`;
    content += _createApiTypesFile(nestedApis[config["module"]], 1);
    content += `}\n`;
    writeFile({ config, configDir, fileName: "ApiTypes.d.ts", fileContent: content });
}

/**
 * 生成枚举文件
 * @param params.openapi - OpenAPI 文档对象
 * @param params.config - 配置信息
 * @param params.configDir - 配置文件所在目录
 */
export function createEnumsFile(params: {
    openapi: OpenAPI3;
    config: ConfigType;
    configDir: string;
}) {
    const { openapi, config, configDir } = params;
    const enums = openapi["x-enum"] as XEnumType;
    if (enums == undefined) return;
    let data = ``;

    for (const [name, schema] of Object.entries(enums)) {
        if (!schema) {
            console.warn(`警告: 枚举 ${name} 的schema为空`);
            continue;
        }

        const { title, properties } = schema;
        if (!title || !properties) {
            console.warn(`警告: 枚举 ${name} 缺少title或properties属性`);
            continue;
        }

        data += `// ${title}\n`;
        data += `export const ${name} = {\n`;

        properties.forEach((item: { value: string; label: string; color: string; textColor: string }) => {
            if (!item || !item.value) {
                console.warn(`警告: 枚举 ${name} 中存在无效的item`);
                return;
            }
            const temp1 = item.value.replace(/\\/g, "\\\\");
            data += `  '${temp1}': ${JSON.stringify({
                text: item.label || item.value,
                color: item.color || '#bfbfbf',
                value: item.value,
            })}, \n`;
            data = data.replace(/"/g, "'")
        });
        data += `};\n\n`;
    }

    writeFile({ config, configDir, fileName: "Enums.ts", fileContent: data });
}

/**
 * 生成 API 调用代码
 * @param node - API 节点
 * @param level - 缩进级别
 */
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

/**
 * 生成 API 类型定义代码
 * @param node - API 节点
 * @param level - 缩进级别
 */
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