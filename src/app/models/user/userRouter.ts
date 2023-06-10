import express from "express";
import validateRequest from "../../../middlewares/validateRequest";
import createUser from "./userController";
import userZodSchema from "./zodUserValidation";

const router = express.Router();

router.post("/createUser", validateRequest(userZodSchema), createUser);

export default router;
