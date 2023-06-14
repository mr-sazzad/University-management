import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import userSemester from "./app/models/academicSemester/semesterRouter";
import userRouter from "./app/models/user/userRouter";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users/", userRouter);

app.use("/api/v1/academic-semester", userSemester);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.send({
    success: false,
    message: " Not Found ",
    errorMessage: [
      {
        path: req.originalUrl,
        message: "Your Requested URL Not Found ! 💤"
      }
    ]
  });
  next();
});

export default app;
