import httpStatus from 'http-status';
import asyncRequestHandler from '../utils/asyncRequestHandler';
import sendResponse from '../utils/sendResponse';
import { UserServices } from './user.service';

const createDoctor = asyncRequestHandler(async (req, res) => {
  const { password, doctor: doctorData } = req.body;
  const result = await UserServices.createDoctorIntoDB(password, doctorData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Doctor is created successfully',
    data: result,
  });
});

export const UserControllers = {
  createDoctor,
};
