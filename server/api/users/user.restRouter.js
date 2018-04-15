import express from 'express';
import * as UserController from './user.controller';

const userRouter = express.Router();

userRouter.route('/')

userRouter.route('/signup')
  .post(UserController.signup)

userRouter.route('/:id')


export default userRouter;