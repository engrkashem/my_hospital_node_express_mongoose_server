/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import config from '../config';
import { TErrorSources } from '../interfaces/errors';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = 500;
  const message = 'Something went wrong';

  const errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.nodeEnv === 'development' ? err.stack : null,
  });
};

export default globalErrorHandler;
