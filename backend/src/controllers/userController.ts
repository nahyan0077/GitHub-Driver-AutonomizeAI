import { NextFunction, Request, Response } from "express";
import { UserInterface, UserModel } from "../models/userModel";
import axios from "axios";

export const getUserData = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;
    try {
        
        console.log(username);

        const user = await UserModel.findOne({username})

        if (user) {
            return res.status(200).json(user);
          } else {
              const result = await axios.get(`https://api.github.com/users/${username}`)

            const userData: UserInterface = {
                username: result.data.login,
                email: result.data.email,
                bio: result.data.bio,
                location: result.data.location,
                name: result.data.name,
                avatar_url: result.data.avatar_url,
                type: result.data.type,
                repos_url: result.data.repos_url,
                deleted: false,
                followers: result.data.followers,
                following: result.data.following,
                created_at: result.data.created_at,
                updated_at: result.data.updated_at,
                
            }

            const newUser = new UserModel(userData)
            await newUser.save()

            return res.status(404).json({ message: 'User not found' });
          }
        

    } catch (error: any) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Error occurred while fetching user data', error: error.message });
    }
}