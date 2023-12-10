import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import { Role, Status } from './user.constants';

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: [true, 'Id is required'], unique: true },
    password: { type: String, required: [true, 'Password is required'] },
    isPasswordChanged: { type: Boolean, default: false },
    role: { type: String, enum: Role, required: [true, 'Role is required'] },
    status: { type: String, enum: Status, default: 'active' },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
