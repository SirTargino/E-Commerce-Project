import { DataTypes, Sequelize, UUID } from "sequelize";
import { sequelize as database } from "../database/connection.js";
import { UserEntity } from "./UserEntity.js";
import { ProductEntity } from "./ProductEntity.js";

export const SaleEntity = database.define('Sale', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    totalValue: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

UserEntity.hasMany(SaleEntity);
SaleEntity.belongsTo(UserEntity);

SaleEntity.belongsToMany(ProductEntity ,{through: 'SaleProduct'});
ProductEntity.belongsToMany(SaleEntity ,{through: 'SaleProduct'});