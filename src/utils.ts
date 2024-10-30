import * as fs from "fs";
import { OpenAPI3 } from "openapi-typescript";
import * as path from "path";
import { assign, pascal } from "radash";
import { CONFIG_FILE_PATH, DEFAULT_CONFIG } from "./consts";

export function getConfig(): ConfigType {
  let config;
  if (fs.existsSync(CONFIG_FILE_PATH)) {
    const fileContent = fs.readFileSync(CONFIG_FILE_PATH, "utf8");
    config = assign(DEFAULT_CONFIG, JSON.parse(fileContent)) as ConfigType;
  } else {
    console.log("gencode.json 文件不存在，自动生成默认配置文件");
    fs.writeFileSync(
      CONFIG_FILE_PATH,
      JSON.stringify(DEFAULT_CONFIG, null, 2),
      "utf8"
    );
    config = DEFAULT_CONFIG;
  }
  console.log("加载和解析配置文件：", config);
  return config;
}

export function deleteOldFiles(config: ConfigType) {
  if (fs.existsSync(config.outPath)) {
    fs.readdirSync(config.outPath).forEach((file) => {
      const curPath = path.join(config.outPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteOldFiles(config);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(config.outPath);
    console.log(`删除老的文件： ${config.outPath} 已成功删除。`);
  } else {
    console.log(`删除老的文件： ${config.outPath} 不存在。`);
  }
}

export async function fetchOpenApi(config: ConfigType): Promise<OpenAPI3> {
  const response = await fetch(config.url);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  const data = await response.json();
  // console.log(data);
  console.log(`获取 OpenAPI 文档： ${config.url} 成功。`);
  return data as OpenAPI3;
}

export function createNestedStructure(openapi: OpenAPI3) {
  const root: MyTreeNodeType = {};
  openapi.tags?.forEach((tag) => {
    const parts = tag.name.replace(/Controller$/, "").split("/");
    let currentLevel: MyTreeNodeType = root;
    parts.forEach((part) => {
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
    // console.log('path', path);
    // console.log('methods', methods);
    for (const [, content] of Object.entries(methods)) {
      // console.log('method', method);
      // console.log('content', content);
      const tags = content.tags[0].replace(/Controller$/, "").split("/");
      // console.log("tags", tags);
      const isDownload = content["x-is-download"] ?? false;
      let currentLevel = nestedStructure;
      tags.forEach((tag: string, index: number) => {
        currentLevel = currentLevel[tag] as MyTreeNodeType;
        if (index === tags.length - 1) {
          const name = pascal(content.summary);
          // console.log("name", name);
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
          // if (content.parameters) {
          //   content.parameters.forEach(
          //     (param: { name: string; schema: { type: string } }) => {
          //       params[param.name] = param.schema.type;
          //     }
          //   );
          // }
          currentLevel[name] = {
            path,
            tags: [...tags, name],
            params,
            required,
            isDownload,
          };
          // currentLevel[name].path = path;
          // currentLevel[name].tags = [...tags, name];
          // currentLevel[name].params = params;
          // currentLevel[name].required = required;
          // if (isDownload) currentLevel[name].isDownload = isDownload;
        }
      });
    }
  }
  return nestedStructure;
}

export function createApisFile(nestedApis: MyTreeNodeType, config: ConfigType) {
  let content =
    `${config["apis"]["firstLine"]}\n\n` + `export const Apis = {\n`;
  content += _createApisFile(nestedApis[config["module"]], 1);
  content += `}`;
  writeFile(config["outPath"], "Apis.ts", content);
}

export function createApiTypesFile(
  nestedApis: MyTreeNodeType,
  config: ConfigType
) {
  let content = `declare namespace ApiTypes {\n`;
  content += _createApiTypesFile(nestedApis[config["module"]], 1);
  content += `}\n`;
  writeFile(config["outPath"], "ApiTypes.d.ts", content);
}

export function createEnumsFile(openapi: OpenAPI3, config: ConfigType) {
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
  writeFile(config["outPath"], "Enums.ts", data);
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

function writeFile(
  dir: string,
  fileName: string,
  fileContent: string,
  print = true
) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFile(path.join(dir, fileName), fileContent, function (err) {
    if (err) {
      console.error("Error: " + err.message);
    } else {
      if (print) console.log(`${fileName} has been created successfully.`);
    }
  });
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
