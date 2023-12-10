type TRole = 'patient' | 'doctor' | 'staff' | 'admin';

type TStatus = 'active' | 'blocked';

export type TUser = {
  id: string;
  password: string;
  isPasswordChanged: boolean;
  role: TRole;
  status: TStatus;
  isDeleted: boolean;
};
