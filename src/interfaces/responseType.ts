import { IGenericErrorMessage } from "./error";

export type IGenericResponseType = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
