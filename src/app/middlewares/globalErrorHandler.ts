/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import config from '../config';
import { TErrorSources, TGenericErrorResponse } from '../interfaces/errors';
import duplicateKeyErrorHandler from '../errors/duplicateKeyErrorHandler';
import AppError from '../errors/AppError';
import { ZodError } from 'zod';
import zodErrorHandler from '../errors/zodErrorHandler';
import validationErrorHandler from '../errors/validationErrorHandler';
import castErrorHandler from '../errors/castErrorHandler';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong';

  let errorSources: TErrorSources = [
    {
      path: '',
      message: err?.message,
    },
  ];

  const assignErrorValues = (formattedError: TGenericErrorResponse) => {
    statusCode = formattedError.statusCode;
    message = formattedError.message;
    errorSources = formattedError.errorSources;
  };

  if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.name;
    errorSources = [
      {
        path: '',
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err?.name;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  } else if (err instanceof ZodError) {
    assignErrorValues(zodErrorHandler(err));
  } else if (err?.name === 'ValidationError') {
    assignErrorValues(validationErrorHandler(err));
  } else if (err?.name === 'CastError') {
    assignErrorValues(castErrorHandler(err));
  } else if (err?.code === 11000) {
    assignErrorValues(duplicateKeyErrorHandler(err));
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.nodeEnv === 'development' ? err.stack : null,
  });
};

export default globalErrorHandler;
