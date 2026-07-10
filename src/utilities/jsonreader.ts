import fs from "fs";
import path from "path";

export function readJsonData<T>(fileName: string): T {

    const filePath = path.join(
        process.cwd(),
        "src",
        "test-data",
        fileName
    );

    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}