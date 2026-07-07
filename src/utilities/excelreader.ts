import * as xlsx from 'xlsx'

export class ExcelReader{
    static getData(filepath:string,sheetname:string){
        const workbook = xlsx.readFile(filepath);
        const worksheet = workbook.Sheets[sheetname];
        if(!worksheet){
            throw new Error(`Sheet ${sheetname} not found in the project folder ${filepath}`);
        }
        return xlsx.utils.sheet_to_json(worksheet);
    }
}