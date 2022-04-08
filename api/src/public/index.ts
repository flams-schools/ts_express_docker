import 'module-alias/register';
import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import { Init } from '@config/express';
import { Log } from "@config/Logger";
import { LogTypes } from '@config/Types';


const app = Init.initialize();

app.use(express.json());
app.use(cors());
// app.use(express.bodyParser({ urlencoded: true }));

const port: number = Number(process.env.APP_PORT) || 5000

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.message) {
    Log.log(err.message, LogTypes.error);
    res.status(500).send('Something happened, please informthe IT!')
    return;
  }
  return res.status(500).json({"error": "Error message not logged"});
})

app.listen(port, () => {
  Log.log(`Server started and Running on port ${port}`, LogTypes.info);
});
