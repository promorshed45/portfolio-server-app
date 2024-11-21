import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest, { validateRequestCookies } from '../../middlewares/validateRequest';
import { AuthControllers } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(AuthValidation.registerValidationSchema),
  AuthControllers.registerUser,
);
router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);



router.post(
  '/refresh-token',
  validateRequestCookies(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);


router.post(
  '/change-password',
  auth("ADMIN","USER"),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword,
);


router.post(
  '/update-password',
  auth("ADMIN","USER"),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.updatePassword,
);

export const AuthRoutes = router;
