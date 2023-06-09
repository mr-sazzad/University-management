import cors from "cors";
import express, { Application, Request, Response } from "express";
import userRouter from "./app/models/user/userRouter";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1/users/", userRouter);

export default app;
