import express from 'express'
import * as dogThingController from './dogthing.controller';

const dogRouter = express.Router();

dogRouter.route('/')
  .get(dogThingController.getDogs)
  .post(dogThingController.adoptDog)

export default dogRouter;