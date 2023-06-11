import { IAcademicSemester } from "./semesterInterface";
import { AcademicSemester } from "./semesterModel";

export const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(payload);
  return result;
};
