import { sequelize as database } from "../database/connection.js";
import { UserEntity } from "../entities/UserEntity.js";

export const createUser = async (name, email, password) =>{
    //Checks the existence of the table
    await database.sync();

    //Create data
    const newUser = await UserEntity.create({
        name,
        email: email,
        password: password
    })
    return newUser;
}