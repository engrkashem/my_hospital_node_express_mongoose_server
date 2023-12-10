import { Router } from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { DoctorValidations } from '../doctors/doctor.validation';

const router = Router();

router.post(
  '/create-doctor',
  validateRequest(DoctorValidations.createDoctorValidationSchema),
  UserControllers.createDoctor,
);

export const UserRoutes = router;
