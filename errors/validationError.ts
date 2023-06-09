import mongoose from "mongoose";
import { IGenericErrorMessage } from "../src/interfaces/error";
import { IGenericResponseType } from "../src/interfaces/responseType";

const validationError = (
  err: mongoose.Error.ValidationError
): IGenericResponseType => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (e: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: e?.path,
        message: e?.message
      };
    }
  );
  const statusCode = 400;
  return {
    statusCode,
    message: "validation Error 😭",
    errorMessages: errors
  };
};

export default validationError;
