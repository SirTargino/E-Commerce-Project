import { sequelize as database } from "../database/connection.js";
import { UserEntity } from "../entities/UserEntity.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Checks the existence of the table
        await database.sync();

        const checkEmailExistence = await UserEntity.findOne({
            where: {
                email
            }
        })

        if (checkEmailExistence) {
            return res.json("E-mail already registered!");
        }

        //Create data
        const newUser = await UserEntity.create({
            name,
            email,
            password
        })

        res.status(201).json({ message: `Your user registered successfully! Name: ${name}, Email: ${email}` });
    } catch (error) {
        res.json({message: error});
    }
}