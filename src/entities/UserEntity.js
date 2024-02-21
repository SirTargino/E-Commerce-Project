import { DataTypes, Sequelize, UUID } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const UserEntity = database.define('Client', {
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
    email: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
});