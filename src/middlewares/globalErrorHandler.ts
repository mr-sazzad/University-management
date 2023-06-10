import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { default as config, default as node_env } from "../config/index";
import apiErrors from "../errors/apiErrors";
import validationError from "../errors/validationError";
import zodError from "../errors/zosError";
import { IGenericErrorMessage } from "../interfaces/error";
import { errorLogger } from "../winston/logger";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (node_env && node_env.node_env === "development") {
    console.log("globalErrorHandler ~ ", err);
  } else {
    errorLogger.error("globalErrorHandler ~ ", err);
  }
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
  } else if (err instanceof ZodError) {
    const simplifiedError = zodError(err);
    (statusCode = simplifiedError?.statusCode),
      (message = simplifiedError?.message);
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
