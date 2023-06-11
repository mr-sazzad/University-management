import express from "express";
import validateRequest from "../../../middlewares/validateRequest";
import { createAcademicSemester } from "./semesterController";
import { createAcademicSemesterZod } from "./semesterValidation";

const router = express.Router();

router.post(
  "/createAcademicSemester",
  validateRequest(createAcademicSemesterZod),
  createAcademicSemester
);

export default router;
