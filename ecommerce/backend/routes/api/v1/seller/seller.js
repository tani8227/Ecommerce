import express from 'express';
import mobileRouter from './mobile.js';
import shirtRouter from './shirt.js';
const sellerRouter= express.Router();

import * as sellerController from '../../../../controllers/sellers/seller_controller.js'

sellerRouter.post('/create', sellerController.sellerSignup );
sellerRouter.post('/create-session', sellerController.createSession);
sellerRouter.use('/mobile',mobileRouter)
sellerRouter.use('/shirt', shirtRouter );




export default sellerRouter;