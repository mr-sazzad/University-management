import config from "../../../config";
import { IUser } from "./userInterface";
import { User } from "./userModel";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user);

  if (!user.password) {
    user.password = config.student_password as string;
  }

  if (!createdUser) {
    throw new Error("Failed to create user !");
  }
  return createdUser;
};

export default {
  createUser
};
