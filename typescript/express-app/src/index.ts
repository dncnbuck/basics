import * as dotenv from 'dotenv';
import express from 'express';
import router from './routes';

dotenv.config()
const app = express();
const port = process.env.PORT;


app.use('/', router);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });