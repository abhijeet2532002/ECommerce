import express from 'express';
import DB from './config/DB_Config.js'
import GateWay from './router/GateWay.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', GateWay);

app.listen(PORT, () => {
    console.log(`port = ${PORT}`);
})