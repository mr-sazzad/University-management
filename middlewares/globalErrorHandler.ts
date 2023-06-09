import { NextFunction, Request, Response } from "express";
import { IGenericErrorMessage } from "../src/interfaces/error";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const error = "something went wrong !";
  const errorMessages: IGenericErrorMessage[] = [];

  // if (err?.name === "ValidationError") {
  // }

  res.status(statusCode).json({
    success: false,
    message: error,
    errorMessages,
    stack: config.node_env !== "production" ? err?.stack : undefined
  });
  next();
};

export default globalErrorHandler;
