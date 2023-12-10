import { z } from 'zod';

const createUserValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
      required_error: 'Password is required',
    })
    .trim()
    .optional(),
});

export const UserValidations = {
  createUserValidationSchema,
};
