import dotenv from 'dotenv';
import { google } from 'googleapis';

const sheets = google.sheets('v4');

dotenv.config();

const SCOPES = [process.env.SHEET_SCOPE].filter(scope => scope !== undefined) as string[];

export const getAuthToken = async () => {
    const auth = new google.auth.GoogleAuth({
        scopes: SCOPES
    });
    const authToekn = await auth.getClient();
    return authToekn;
}

export const getSpreadSheet = async ({ spreadsheetId, auth } : any) => {
    const res = await sheets.spreadsheets.get({
        spreadsheetId,
        auth,
    });
    return res;
}

export const getSpreadSheetValues = async ({ spreadsheetId, auth, sheetName } : any) => {
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        auth,
        range: sheetName
    });
    return res;
}
