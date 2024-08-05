import express from 'express';

const userRouter= express.Router();

import * as userController from '../../../../controllers/users/user_controller.js'
import passport from '../../../../config/passport-jwt-strategy.js'

userRouter.get('/', passport.authenticate('jwt',{ session: false }));
userRouter.post('/create', userController.signup);
userRouter.post('/create-session', userController.createSession);




export default userRouter;