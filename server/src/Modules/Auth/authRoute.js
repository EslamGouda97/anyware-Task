import { Router } from 'express';
const router=Router();
import { signUp, signIn} from './authController.js';
import { validationError } from '../../MiddleWares/ValidationError.js';
import { signInValidation, signUpValidation } from './auth.validation.js';

router.post('/signUp',signUpValidation,validationError, signUp);
router.post('/signIn',signInValidation,validationError, signIn);
// router.get('/verify/:token', verifyEmail);

export default router;