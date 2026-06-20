import { body } from "express-validator";

const validation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage("Name is required."),
    body('email')
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Enter proper email"),
    body('password')
        .notEmpty()
        .withMessage("Password is required.")
        .isLength({min : 8})
        .withMessage("Password must be of 8 character.")
        .isStrongPassword()
        .withMessage("Please enter Strong Password.."),
]

export default validation;