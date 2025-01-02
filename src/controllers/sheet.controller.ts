import { getAuthToken, getSpreadSheet, getSpreadSheetValues } from "../services/sheet.service";
import { Request, Response } from 'express';

const spreadsheetId = process.env.SPREADSHEET_ID;
const sheetName = process.env.SHEET_NAME;

export const getSpreadSheetDetails = async (req: Request, res: Response) => {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheet({
            spreadsheetId,
            auth
        })
        res.send(response.data);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const getSheetValues = async (req: Request, res: Response) => {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheetValues({
            spreadsheetId,
            sheetName,
            auth
        })
        res.send(response.data);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}
