// import mongoose from "mongoose";
// import { IGenericErrorMessage } from "./error";

// const handleValidationError = (err: mongoose.Error.ValidationError) => {
//   const errors: IGenericErrorMessage[] = Object.values(err.errors).map((el) => {
//     if ('path' in el) {
//       const validationError = el as mongoose.Error.ValidationError;
//       return {
//         path: validationError.path,
//         message: validationError.message
//       };
//     } else if ('stringValue' in el) {
//       const castError = el as mongoose.Error.CastError;
//       return {
//         path: castError.path,
//         message: castError.stringValue
//       };
//     } else {
//    // Handle other error types if needed
//       return {
//         path: '',
//         message: 'Unknown error'
//       };
//     }
//   });

//   return errors;
// };

// export default handleValidationError;
