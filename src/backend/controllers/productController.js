import { sequelize as database } from "../database/connection.js";
import { ProductEntity } from "../entities/ProductEntity.js";

export const createProduct = async (req, res) => {
    //Checks the existence of the table
    try {
        const { name, description, price, stock } = req.body;

        await database.sync();

        const checkProductExistence = await ProductEntity.findOne({
            where: {
                name
            }
        })

        if (checkProductExistence) {
            return res.json("Product already registered!");
        }

        //Create data
        const newProduct = await ProductEntity.create({
            name,
            description: description,
            price: price,
            stock: stock
        })
        res.status(201).json({message: `Product registered sucessfully! Name:${name}, price: ${price}, stock ${stock}`})
    } catch (error) {
        res.json({message: error});
    }
}