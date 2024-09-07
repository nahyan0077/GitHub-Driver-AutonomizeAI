import { NextFunction, Request, Response } from "express";
import { UserInterface, UserModel } from "../models/userModel";
import axios from "axios";

export const createUserData = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;
    
    try {

        const user = await UserModel.findOne({ username });        

        if (user) {
            return res.status(200).json(user);
        } else {

            try {
                const result = await axios.get(`https://api.github.com/users/${username}`);

                console.log("test  ",result);
                
                
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
                };

                const newUser = new UserModel(userData);
                await newUser.save();

                return res.status(200).json(newUser);
            } catch (apiError: any) {

                if (apiError.response && apiError.response.status === 404) {
                    return res.status(404).json({ message: `GitHub user '${username}' not found.` });
                }

                return res.status(500).json({ message: 'Error fetching user data from GitHub', error: apiError.message });
            }
        }

    } catch (error: any) {

        console.error('Error fetching user data:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page = 1, limit = 10, search = '' } = req.query;
  
      const pageNumber = Number(page);
      const limitNumber = Number(limit);
  
      const searchQuery = search  ? { name: { $regex: search, $options: 'i' },} : {};

      const users = await UserModel.find(searchQuery).skip((pageNumber - 1) * limitNumber).limit(limitNumber);
  
      const total = await UserModel.countDocuments(searchQuery);
  
      res.status(200).json({  users, total, page: pageNumber, limit: limitNumber});

    } catch (error: any) {
      console.error('Error fetching user data:', error);
      return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params 

        const result = await UserModel.deleteOne({_id: id})

        if (result.deletedCount > 0) {
            return res.status(200).json({ message: 'User successfully deleted' });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }

    } catch (error: any) {
        console.error('Error fetching user data:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
