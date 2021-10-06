import Router from "express";
import registerController from '../controllers/users/registerController.js';
import loginController from '../controllers/users/loginController.js';

const router = Router();

router.route('/register')
    .post(registerController.register);

router.route('/login')
    .post(loginController.login);


export default router;