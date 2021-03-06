import express from 'express'
import campaignsModel from './campaigns.model';
import * as campaignsController from './campaigns.controller';

const campaignsRouter = express.Router();

campaignsRouter.route('/')
  .get(campaignsController.getAllCampaigns)
  .post(campaignsController.addCampaign)

campaignsRouter.route('/:id')
  .put(campaignsController.uploadImage)
  .get(campaignsController.getCampaign)
  .delete(campaignsController.removeCampaign)

export default campaignsRouter