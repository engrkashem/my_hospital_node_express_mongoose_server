import { Schema, model } from 'mongoose';
import { TDoctor } from './doctor.interface';
import { addressSchema, userNameSchema } from '../../schemas';
import { BloodGroup, Gender } from '../constants';

const doctorSchema = new Schema<TDoctor>(
  {
    id: { type: String, required: [true, 'Id is required'], unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'user ObjectId is required'],
    },
    name: { type: userNameSchema, required: [true, 'Name is required'] },
    designation: { type: String, required: [true, 'Designation is required.'] },
    degrees: [
      { type: String, required: [true, 'Professional Degrees are required.'] },
    ],
    gender: {
      type: String,
      enum: Gender,
      required: [true, 'Designation is required.'],
    },
    email: { type: String, required: [true, 'Email is required.'] },
    dateOfBirth: { type: Date, required: [true, 'Date of birth is required.'] },
    bloodGroup: { type: String, enum: BloodGroup },
    contactNo: { type: String, required: [true, 'Contact number is required'] },
    address: { type: addressSchema, required: [true, 'Address is required'] },
    profileImage: { type: String },
    department: { type: Schema.Types.ObjectId },
    salary: { type: String, required: [true, 'Salary is required'] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Doctor = model<TDoctor>('Doctor', doctorSchema);
