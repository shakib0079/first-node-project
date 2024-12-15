import express, { request, response } from 'express';
import cors from 'cors';
import { Products } from './Data.js';


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/products', (request, response) => {
    

    response.json(Products);
})


app.listen(port, () => {
    console.log("App is running at port: ", port);
})