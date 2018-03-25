import express from 'express'
import campaignsRouter from '../campaigns/campaigns.restRouter';

const restRouter = express.Router();

restRouter.use('/campaigns', campaignsRouter)

export default restRouter