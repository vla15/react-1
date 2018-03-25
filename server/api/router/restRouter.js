import express from 'express'
import campaignsRouter from '../campaigns/campaigns.restRouter';
import dogRouter from '../dogThing/dogthing.restRouter';

const restRouter = express.Router();

restRouter.use('/campaigns', campaignsRouter);
restRouter.use('/dogThing', dogRouter);

export default restRouter