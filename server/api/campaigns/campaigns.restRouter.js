import express from 'express'
import campaignsModel from './campaigns.model';
import * as campaignsController from './campaigns.controller';

const campaignsRouter = express.Router();

campaignsRouter.route('/')
  .post(campaignsController.addCampaign)

export default campaignsRouter