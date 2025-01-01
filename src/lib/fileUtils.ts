import * as fs from "fs";
import * as path from "path";

export function deleteOldFiles(config: ConfigType, configDir: string) {
    const outPath = path.join(configDir, config.outPath);
    if (fs.existsSync(outPath)) {
        fs.readdirSync(outPath).forEach((file) => {
            const curPath = path.join(outPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteOldFiles({ ...config, outPath: curPath }, configDir);
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

export function writeFile(
    config: ConfigType,
    configDir: string,
    fileName: string,
    fileContent: string,
    print = true
) {
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