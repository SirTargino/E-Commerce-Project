import express from 'express';
import { testConnection } from './database/connection.js';
import { userRouter } from './routes/userRoute.js';
import { productRouter } from './routes/productRoute.js';
import cors from 'cors';

const app = express()

let port = 4000;

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(productRouter);

app.listen(port, ()=>{
    testConnection()
    return console.log("Server run");
})
