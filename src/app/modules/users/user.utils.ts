import { User } from './user.model';

const getLastDoctorId = async () => {
  const lastDoctorId = await User.findOne({ role: 'doctor' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastDoctorId?.id ? lastDoctorId?.id : undefined;
};

export const generateDoctorId = async () => {
  let currentId = (0).toString();

  const lastDoctorId = await getLastDoctorId();

  if (lastDoctorId) {
    currentId = lastDoctorId.substring(3);
  }

  const incrementedId = (Number(currentId) + 1).toString().padStart(4, '0');

  return `D-${incrementedId}`;
};
