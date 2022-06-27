import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import productRoutes from './routes/product.js';
import conectarDB from './util/database.js';

const app = express();
dotenv.config();

conectarDB();
app.set('port', process.env.PORT);
app.use(express.json());
app.use(cors());

app.use(productRoutes);

export default app;