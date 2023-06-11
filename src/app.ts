import cors from "cors";
import express, { Application } from "express";
import userSemester from "./app/models/academicSemester/semesterRouter";
import userRouter from "./app/models/user/userRouter";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users/", userRouter);

app.use("api/v1/academic-semester", userSemester);

export default app;
