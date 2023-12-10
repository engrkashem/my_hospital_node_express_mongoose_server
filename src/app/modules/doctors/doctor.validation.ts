import { z } from 'zod';
import {
  createAddressValidationSchema,
  createUserNameValidationSchema,
} from '../schemas/module.validation.schemas';
import { Gender } from '../constants/module.constants';

const createDoctorValidationSchema = z.object({
  doctor: z.object({
    name: createUserNameValidationSchema,
    designation: z.string({
      invalid_type_error: 'Designation must be string',
      required_error: 'Designation is required',
    }),
    degrees: z.array(z.string()),
    gender: z.enum([...Gender] as [string, ...string[]]),
    email: z
      .string({
        invalid_type_error: 'Email must be string',
        required_error: 'Email is required',
      })
      .email(),
    dateOfBirth: z.string(),
    contactNo: z.string(),
    address: createAddressValidationSchema,
    profileImage: z.string({
      invalid_type_error: 'Profile image must be string',
    }),
    department: z.string({
      invalid_type_error: 'Department must be string of ObjectId',
    }),
    salary: z.number(),
  }),
});

export const DoctorValidations = {
  createDoctorValidationSchema,
};
