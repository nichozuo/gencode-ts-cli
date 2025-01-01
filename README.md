# gencode-ts-cli

一个从 OpenAPI 规范生成 TypeScript 代码的命令行工具。

## 安装

```bash
npm install -g @nichozuo/gencode-ts-cli
# 或
pnpm add -g @nichozuo/gencode-ts-cli
```

## 使用方法

1. 创建配置文件 `gencode.json`：

```json
{
  "url": "http://your-api-url/openapi",
  "module": "Admin",
  "outPath": "./output",
  "apis": {
    "firstLine": "import { MyResponseType } from '@/common'; import { request } from '@umijs/max';"
  }
}
```

2. 运行命令：

```bash
# 使用当前目录的配置文件
gencode-ts

# 使用指定目录的配置文件
gencode-ts --configDir ./your-config-dir
```

## 配置说明

- `url`: OpenAPI 文档的 URL
- `module`: 模块名称
- `outPath`: 输出目录
- `apis.firstLine`: API 文件的首行导入语句

## 输出文件

工具会生成以下文件：

- `Apis.ts`: API 调用代码
- `ApiTypes.d.ts`: API 类型定义
- `Enums.ts`: 枚举定义
