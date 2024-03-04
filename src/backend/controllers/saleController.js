import { sequelize as database, sequelize } from "../database/connection.js";
import { SaleEntity } from "../entities/SaleEntity";

export const createSale = async(req,res) =>{
    try {
        const {UserId, productId} = req.body;

        await sequelize.sync()

        
    } catch (error) {
        res.json({message: error});
    }
}
