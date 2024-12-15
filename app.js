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

app.post('/addproduct', (request, response) => {
    
    const prod = request.body;

    const newProd = {
        id: Math.floor(Math.random() * 2024 + 1),
        productTitle: prod.productTitle,
        productImg: prod.productImg,
        price: prod.price,
        description: prod.description,
        qty: prod.qty,
        createdAt: new Date()
    }
    Products.push(newProd);

    response.send(newProd)
})


app.listen(port, () => {
    console.log("App is running at port: ", port);
})