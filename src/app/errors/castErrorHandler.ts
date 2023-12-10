import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interfaces/errors';
import httpStatus from 'http-status';

const castErrorHandler = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'cast Error: Invalid Id',
    errorSources,
  };
};

export default castErrorHandler;
