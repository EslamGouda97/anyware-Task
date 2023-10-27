import {body,param} from 'express-validator';

export const createQuizValidation = [
    body('title').notEmpty().withMessage('Title is required'),
    body('questions').isArray().withMessage('Questions must be an array'),
    body('questions.*.questionText').notEmpty().withMessage('Question text is required'),
    body('questions.*.options').isArray().withMessage('Options must be an array'),
    body('questions.*.correctAnswer').notEmpty().withMessage('Correct answer is required'),
  ];
  export const updateQuizValidation = [
    body('title').optional().notEmpty().withMessage('Title is required'),
    body('questions').optional().isArray().withMessage('Questions must be an array'),
    body('questions.*.questionText').optional().notEmpty().withMessage('Question text is required'),
    body('questions.*.options').optional().isArray().withMessage('Options must be an array'),
    body('questions.*.correctAnswer').optional().notEmpty().withMessage('Correct answer is required'),
  ];
  
export const deleteQuizValidation = [
    param('id').isMongoId().withMessage('Invalid MongoDB ObjectID for :id parameter'),
  ];