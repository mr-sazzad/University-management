import { Model } from "mongoose";

export type IUser = {
  id: string;
  password: string;
  role: string;
};

export type UserModel = Model<IUser, object>;
