export const CONFIG_FILE_PATH: string = "./gencode.json";

export const DEFAULT_CONFIG: ConfigType = {
  url: "http://0.0.0.0:8000/api/docs/openapi",
  module: "Admin",
  outPath: "./src/gen/",
  apis: {
    firstLine:
      "import { MyResponseType } from '@/common';\nimport { request } from '@umijs/max';",
  },
};
