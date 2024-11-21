import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  auth("ADMIN"),
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.userRegister,
);
router.get('/', UserControllers.getAllUsers);
router.get('/:id', UserControllers.getSingleUser);
router.delete('/:id', UserControllers.deleteUser);
router.patch('/updateUser/:id', 
  // auth('ADMIN'),
UserControllers.updateUser);

export const UserRoutes = router;
