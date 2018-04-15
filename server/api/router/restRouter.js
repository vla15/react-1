import express from 'express'
import campaignsRouter from '../campaigns/campaigns.restRouter';
import dogRouter from '../dogThing/dogthing.restRouter';
import userRouter from '../users/user.restRouter';

const restRouter = express.Router();

restRouter.use('/campaigns', campaignsRouter);
restRouter.use('/dogThing', dogRouter);
restRouter.use('/users', userRouter);

export default restRouter