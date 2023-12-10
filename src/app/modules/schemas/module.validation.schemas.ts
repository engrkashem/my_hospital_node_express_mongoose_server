import { z } from 'zod';

export const createUserNameValidationSchema = z.object({
  firstName: z.string({
    invalid_type_error: 'First name must be string',
    required_error: 'First name is required',
  }),
  middleName: z
    .string({ invalid_type_error: 'Middle name must be string' })
    .optional(),
  lastName: z.string({
    invalid_type_error: 'Last name must be string',
    required_error: 'Last name is required',
  }),
});

export const createAddressValidationSchema = z.object({
  street: z
    .string({
      invalid_type_error: 'Street must be string',
    })
    .optional(),
  city: z.string({ invalid_type_error: 'City must be string' }).optional(),
  district: z.string({
    invalid_type_error: 'District must be string',
    required_error: 'District is required',
  }),
  division: z
    .string({
      invalid_type_error: 'Division must be string',
    })
    .optional(),
  country: z.string({
    invalid_type_error: 'Country must be string',
    required_error: 'Country is required',
  }),
});
