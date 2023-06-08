import { User } from "../app/models/user/userModel";

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUser?.id;
};

export const incrementID = async (): Promise<string> => {
  const lastUserID = (await findLastUserId()) || String(0).padStart(5, "0");
  const CurrentUserID = String(Number(lastUserID) + 1).padStart(5, "0");

  return CurrentUserID;
};
