#!/usr/bin/env node

import { program } from "commander";
import { getConfig } from "./lib/config";
import { deleteOldFiles } from "./lib/fileUtils";
import { createApisFile, createApiTypesFile, createEnumsFile } from "./lib/generators";
import { createNestedApis, createNestedStructure, fetchOpenApi } from "./lib/openapi";

program
  .option("-c, --configDir <path>", "指定配置文件目录，默认为 './'")
  .parse(process.argv);

const options = program.opts();
const configDir = options.configDir || './';

(async () => {
  // 加载和解析配置文件
  const config = getConfig(configDir);

  // 删除老的文件
  deleteOldFiles(config, configDir);

  // 请求 openapi
  const openapi = await fetchOpenApi(config);

  // 把扁平结构，变成树形结构
  const nestedStructure = createNestedStructure(openapi);

  // 生成接口信息
  const nestedApis = createNestedApis(openapi, nestedStructure);

  // 生成接口文件
  createApisFile(nestedApis, config, configDir);

  // 生成type文件
  createApiTypesFile(nestedApis, config, configDir);

  // 生成ProEnums文件
  createEnumsFile(openapi, config, configDir);
})();
