import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./userInterface";

export const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
  },
  { timestamps: true }
);

export const User = model<IUser, UserModel>("User", userSchema);
