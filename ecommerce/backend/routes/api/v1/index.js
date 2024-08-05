import express from 'express';
const v1Router=express.Router();
import userRouter from '../v1/user/user.js'
import sellerRouter from './seller/seller.js';


v1Router.use('/user', userRouter)
v1Router.use('/seller', sellerRouter)










export default v1Router;
