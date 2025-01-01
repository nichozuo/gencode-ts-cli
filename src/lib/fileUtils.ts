import * as fs from "fs";
import * as path from "path";

/**
 * 删除指定目录下的所有文件
 * @param params.config - 配置信息
 * @param params.configDir - 配置文件所在目录
 */
export function deleteOldFiles(params: {
    config: ConfigType;
    configDir: string;
}) {
    const { config, configDir } = params;
    const outPath = path.join(configDir, config.outPath);
    if (fs.existsSync(outPath)) {
        fs.readdirSync(outPath).forEach((file) => {
            const curPath = path.join(outPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteOldFiles({ config: { ...config, outPath: curPath }, configDir });
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(outPath);
        console.log(`删除老的文件： ${outPath} 已成功删除。`);
    } else {
        console.log(`删除老的文件： ${outPath} 不存在。`);
    }
}

/**
 * 写入文件
 * @param params.config - 配置信息
 * @param params.configDir - 配置文件所在目录
 * @param params.fileName - 文件名
 * @param params.fileContent - 文件内容
 * @param params.print - 是否打印日志，默认为 true
 */
export function writeFile(params: {
    config: ConfigType;
    configDir: string;
    fileName: string;
    fileContent: string;
    print?: boolean;
}) {
    const { config, configDir, fileName, fileContent, print = true } = params;
    const fullPath = path.join(configDir, config.outPath);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
    }
    fs.writeFile(path.join(fullPath, fileName), fileContent, function (err) {
        if (err) {
            console.error("Error: " + err.message);
        } else {
            if (print) console.log(`${fileName} has been created successfully.`);
        }
    });
} 