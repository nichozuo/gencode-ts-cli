import * as fs from "fs";
import * as path from "path";
import { assign } from "radash";
import { CONFIG_FILE_PATH, DEFAULT_CONFIG } from "../consts";

/**
 * 获取配置信息
 * @param params.configDir - 配置文件所在目录
 */
export function getConfig(params: {
    configDir: string;
}): ConfigType {
    const { configDir } = params;
    const configPath = path.join(configDir, CONFIG_FILE_PATH);

    // 读取配置文件
    if (fs.existsSync(configPath)) {
        const fileContent = fs.readFileSync(configPath, "utf8");
        const config = assign(DEFAULT_CONFIG, JSON.parse(fileContent)) as ConfigType;
        console.log("加载和解析配置文件：", config);
        return config;
    } else {
        console.error(`错误：在 ${configPath} 未找到配置文件`);
        process.exit(1);
    }
} 