import apiErrors from "../../../errors/apiErrors";
import { mapTitleWithCode } from "./semesterConstants";
import { IAcademicSemester } from "./semesterInterface";
import { AcademicSemester } from "./semesterModel";

export const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (mapTitleWithCode[payload.title] !== payload.code) {
    throw new apiErrors(400, "Invalid Semester Code ! 🥱");
  }
  const result = await AcademicSemester.create(payload);
  return result;
};
