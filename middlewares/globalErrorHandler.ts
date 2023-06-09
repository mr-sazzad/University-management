import { NextFunction, Request, Response } from "express";
import apiErrors from "../errors/apiErrors";
import validationError from "../errors/validationError";
import config from "../src/config/index";
import { IGenericErrorMessage } from "../src/interfaces/error";

const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "something went wrong !";
  let errorMessages: IGenericErrorMessage[] = [];

  if (err?.name === "ValidationError") {
    const simplifiedError = validationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (err instanceof Error) {
    message = err?.message;
    errorMessages = err?.message ? [{ path: "", message: err?.message }] : [];
  } else if (err instanceof apiErrors) {
    statusCode = err?.statusCode;
    message = err?.message;
    errorMessages = err?.message ? [{ path: "", message: err?.message }] : [];
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    errorMessages,
    stack: config.node_env !== "production" ? err?.stack : undefined
  });

  next();
};

export default globalErrorHandler;
