import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/userModel";

export const getUserData = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;
    try {
        
        const user = await UserModel.findOne({username})

        if (user) {
            return res.status(200).json(user)
        }

    } catch (error) {
        
    }
}