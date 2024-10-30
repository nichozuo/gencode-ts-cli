import {
  createApisFile,
  createApiTypesFile,
  createEnumsFile,
  createNestedApis,
  createNestedStructure,
  deleteOldFiles,
  fetchOpenApi,
  getConfig,
} from "./utils";

(async () => {
  // 加载和解析配置文件
  const config = getConfig();

  // 删除老的文件
  deleteOldFiles(config);

  // 请求 openapi
  const openapi = await fetchOpenApi(config);

  // 把扁平结构，变成树形结构
  const nestedStructure = createNestedStructure(openapi);
  // console.log("nestedStructure", JSON.stringify(nestedStructure, null, 2));

  // 生成接口信息
  const nestedApis = createNestedApis(openapi, nestedStructure);
  // console.log("nestedApis", JSON.stringify(nestedApis, null, 2));

  // 生成接口文件
  createApisFile(nestedApis, config);

  // 生成type文件
  createApiTypesFile(nestedApis, config);

  // 生成ProEnums文件
  createEnumsFile(openapi, config);
})();
