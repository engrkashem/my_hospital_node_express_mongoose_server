import { Schema } from 'mongoose';
import { TAddress, TUserName } from '../interfaces/modules.interfaces';

export const addressSchema = new Schema<TAddress>({
  street: { type: String },
  city: { type: String },
  district: { type: String, required: [true, 'District is required'] },
  division: { type: String },
  country: { type: String, required: [true, 'Country is required'] },
});

export const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: [true, 'First name is required'] },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last name is required'] },
});
