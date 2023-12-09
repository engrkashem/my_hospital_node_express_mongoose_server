import { Request, Response } from 'express';
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API is not found/Invalid API endpoint',
    error: null,
  });
};

export default notFound;
