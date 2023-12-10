/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import { TErrorSources, TGenericErrorResponse } from '../interfaces/errors';

const duplicateKeyErrorHandler = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]+)"/);

  const extractedValue = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedValue} is already exists.`,
    },
  ];

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Data already exists in Database',
    errorSources,
  };
};

export default duplicateKeyErrorHandler;
