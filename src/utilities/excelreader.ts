import * as xlsx from "xlsx";

export function readExcelData<T>(filePath: string, sheetName: string): T[] {
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];
    if (!worksheet) {
        throw new Error(`Sheet '${sheetName}' not found in '${filePath}'`);
    }
    return xlsx.utils.sheet_to_json(worksheet) as T[];
}