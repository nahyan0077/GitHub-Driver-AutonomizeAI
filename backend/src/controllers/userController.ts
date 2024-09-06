import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/userModel";

export const getUserData = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;
    try {
        
        console.log(username);
        

        const user = await UserModel.findOne({username})

        if (user) {
            return res.status(200).json(user);
          } else {
            return res.status(404).json({ message: 'User not found' });
          }
          

    } catch (error: any) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Error occurred while fetching user data', error: error.message });
    }
}