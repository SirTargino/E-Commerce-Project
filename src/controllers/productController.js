import { sequelize as database } from "../database/connection.js";
import { ProductEntity } from "../entities/ProductEntity.js";

export const createProduct = async (name, description, price, stock) =>{
    //Checks the existence of the table
    await database.sync();

    //Create data
    const newProduct = await ProductEntity.create({
        name,
        description: description,
        price: price,
        stock: stock
    })
    return newProduct;
}