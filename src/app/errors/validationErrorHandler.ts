import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interfaces/errors';
import httpStatus from 'http-status';

const validationErrorHandler = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err?.errors).map(
    (error: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: error?.path,
        message: error?.message,
      };
    },
  );

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Data Validation Error',
    errorSources,
  };
};

export default validationErrorHandler;
