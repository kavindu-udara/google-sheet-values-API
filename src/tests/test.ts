import { getAuthToken, getSpreadSheet, getSpreadSheetValues } from "../services/sheet.service";

const spreadsheetId = process.env.SPREADSHEET_ID;
const sheetName = process.env.SHEET_NAME;

async function testGetSpreadSheet() {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheet({
            spreadsheetId,
            auth
        })
        console.log('output for getSpreadSheet', JSON.stringify(response.data, null, 2));
    } catch (error:any) {
        console.log(error.message, error.stack);
    }
}

async function testGetSpreadSheetValues() {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheetValues({
            spreadsheetId,
            sheetName,
            auth
        })
    
        console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch (error: any) {
        console.log(error.message, error.stack);
    }
}

function main() {
    testGetSpreadSheet();
    testGetSpreadSheetValues();
}

main()
