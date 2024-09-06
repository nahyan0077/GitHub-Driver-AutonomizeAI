import { model, Schema } from "mongoose";


export interface UserInterface  {
  username: string;
  _id?: string;
  avatar_url: string;
  type: string;
  repos_url: string;
  name?: string;
  location?: string;
  email?: string;
  bio?: string;
  followers?: number;
  following?: number;
  friends?: string[];
  deleted: boolean;
  created_at?: string;
  updated_at?: string;
}


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  avatar_url: {
    type: String,
  },
  type: {
    type: String,
  },
  repos_url: {
    type: String,
  },
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  bio: {
    type: String,
  },
  followers: {
    type: Number,
  },
  following: {
    type: Number,
  },
  friends: {
    type: [String],
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
});

export const UserModel = model<UserInterface>("User", userSchema);
