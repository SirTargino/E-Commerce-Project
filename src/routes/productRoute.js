import { Router } from "express";
import { createProduct } from "../controllers/productController.js";

const productRouter = Router();

productRouter.post('/createproduct', async (req, res) => {
    const {name, description, price, stock} = req.body;
    const newProduct = await createProduct(name, description, price, stock);
    res
    .status(201)
    .json({message: 'Product created succesfully', newProduct})
});

export {productRouter}