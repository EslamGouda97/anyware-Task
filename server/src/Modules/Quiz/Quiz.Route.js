import { Router } from 'express';
import * as controller from './Quiz.Controller.js';
import { authenticationMW, isAdmin } from '../../MiddleWares/authMW.js';
import { createQuizValidation, deleteQuizValidation, updateQuizValidation } from './Quiz.Validation.js'; 
import { validationError } from '../../MiddleWares/ValidationError.js'; 

const router = Router();

router.route('/quizzes')
  .get(authenticationMW, controller.getAllQuizzes) 
  .post(authenticationMW,isAdmin,createQuizValidation,validationError, controller.createQuiz); 
router.route('/quizzes/:id')
  .patch(authenticationMW,isAdmin,updateQuizValidation,validationError,controller.updateQuiz) 
  .delete(authenticationMW,isAdmin,deleteQuizValidation,validationError,controller.deleteQuiz); 

export default router;
