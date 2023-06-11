import { RequestHandler } from "express";
import { createSemester } from "./semesterService";

export const createAcademicSemester: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { ...semesterData } = req.body;
    const result = createSemester(semesterData);
    res.status(200).json({
      success: false,
      message: "Semester Created Successfully 🥰",
      data: result
    });
  } catch (err) {
    next(err);
  }
};
