import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { DoctorRoutes } from '../modules/doctors/doctor.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/doctors',
    route: DoctorRoutes,
  },
];

moduleRoutes.forEach((el) => router.use(el.path, el.route));

export default router;
