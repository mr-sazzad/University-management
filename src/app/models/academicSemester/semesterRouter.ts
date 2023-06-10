import express from "express";
import validateRequest from "../../../middlewares/validateRequest";
import createUser from "../user/userController";
import { createAcademicSemesterZod } from "./semesterValidation";

const router = express.Router();

router.post(
  "/createAcademicSemester",
  validateRequest(createAcademicSemesterZod),
  createUser
);

export default router;
