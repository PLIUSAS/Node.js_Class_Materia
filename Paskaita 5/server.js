import express from 'express';
import dotenv from 'dotenv';
import routes from './routes.js';
dotenv.config();

const PORT = process.env;
const app = express();

app.use(routes); // express naudoja musu situs routus

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
