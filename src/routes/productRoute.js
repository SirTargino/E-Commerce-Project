import { Router } from "express";
import { createProduct } from "../controllers/productController.js";

const productRouter = Router();

productRouter.post('/createproduct', createProduct);

export {productRouter}