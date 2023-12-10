/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import config from '../../config';
import { TDoctor } from '../doctors/doctor.interface';
import { TUser } from './user.interface';
import { generateDoctorId } from './user.utils';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Doctor } from '../doctors/doctor.model';

const createDoctorIntoDB = async (password: string, payload: TDoctor) => {
  // creating user data as per user model
  const userData: Partial<TUser> = {};

  // populating user data info
  userData.password = password || config.defaultPass;
  userData.role = 'doctor';

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    userData.id = await generateDoctorId();

    // add user to users collection into DB
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create User');
    }

    // set doctor id and user _id to user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newDoctor = await Doctor.create([payload], { session });

    if (!newDoctor.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create doctor');
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, err.message);
  }
};

export const UserServices = {
  createDoctorIntoDB,
};
