import { Model, Types } from 'mongoose';
import {
  TAddress,
  TBloodGroup,
  TGender,
  TUserName,
} from '../interfaces/modules.interfaces';

export type TDoctor = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  designation: string;
  degrees: string[];
  gender: TGender;
  email: string;
  dateOfBirth: Date;
  bloodGroup?: TBloodGroup;
  contactNo: string;
  address: TAddress;
  profileImage?: string;
  department?: Types.ObjectId;
  salary: string;
  isDeleted: boolean;
};

export interface StudentModel extends Model<TDoctor> {
  isDoctorExists(id: string): Promise<TDoctor | null>;
}
