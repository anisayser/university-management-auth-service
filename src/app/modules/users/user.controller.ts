import { Request, Response } from "express";
import userService from "./user.services";

const createUser = async (req: Request, res: Response) => {
    try {

        const { user } = req.body;

        const result = await userService.createUser(user);

        res.status(200).json({
            status: "Success",
            message: "User created sucessfully.",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "There are some while creating the user."
        })
    }
}


export default {
    createUser
}