import { DataTypes, Sequelize, UUID } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const ProductEntity = database.define('Product', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});