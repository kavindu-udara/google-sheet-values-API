import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import sheetRouter from './routes/sheet.route';

dotenv.config();

const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

const apiRouter = express.Router();

apiRouter.use('/sheet', sheetRouter);

app.use('/api', apiRouter);
