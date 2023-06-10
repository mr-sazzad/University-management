import { ZodError, ZodIssue } from "zod";
import { IGenericErrorMessage } from "../interfaces/error";
import { IGenericResponseType } from "../interfaces/responseType";

const zodError = (err: ZodError): IGenericResponseType => {
  const errors: IGenericErrorMessage[] = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: "Validation Error 😭",
    errorMessages: errors
  };
};

export default zodError;
