import {body} from 'express-validator';

export const signUpValidation= [
    body('name').isString().withMessage("name cant be number").notEmpty().withMessage("name cant be blank")
    .isLength({ min: 7,max:30 }).withMessage("userName cant be less than 7 and more than 30"),
    body("password")
    .isString()
    .withMessage("password must be alphapetic").isLength({min:6,max:20}).withMessage("password length must be between 6 and 30 ")
    .notEmpty()
    .withMessage("password cant be blank"),
    body("email")
    .notEmpty()
    .withMessage("email cant be blank")
    .isEmail()
    .withMessage("enter valid email"),
    body('age').isInt({ min: 18, max: 120 }).withMessage("age must be a number between 18 and 120 years old"),
    body('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords do not match');
        }
        return true;
        }).withMessage('Passwords do not match')
];

export const signInValidation = [
        body("email")
        .notEmpty()
        .withMessage("email cant be blank")
        .isEmail()
        .withMessage("email must be alphapetic"),
        body("password")
        .isString()
        .withMessage("password must be alphapetic")
        .notEmpty()
        .withMessage("password cant be blank"), ];