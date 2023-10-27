import { validationResult } from 'express-validator';
import { AppError } from '../Utils/AppError.js';

export const validationError = (request, response, next) => {
  let result = validationResult(request);
  if (result.errors.length != 0) {
    let errorSrting = result.errors.reduce(
      (current, object) => current + object.msg + " , ",
      " "
    );
    next(new AppError(errorSrting,422));
  } else next();
};
