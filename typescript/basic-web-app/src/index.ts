import * as dotenv from 'dotenv';

import express from 'express';

dotenv.config({ 
  path: './env', 
  encoding: 'latin1', 
  debug: true,
  override: false 
});

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});