import fs from "fs";
import { parse } from "csv-parse/sync";

export function readData<T>(filePath: string): T[] {

    const content=fs.readFileSync(filePath, "utf-8");

    return parse(content, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    }) as T[];

}