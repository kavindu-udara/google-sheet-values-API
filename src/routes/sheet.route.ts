import express from 'express';
import { getSheetValues, getSpreadSheetDetails } from '../controllers/sheet.controller';

const router = express.Router();

router.get('/deatils', getSpreadSheetDetails);
router.get('/values', getSheetValues);

export default router;
