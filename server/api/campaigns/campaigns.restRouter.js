import express from 'express'
import campaignsModel from './campaigns.model';

const campaignsRouter = express.Router();

campaignsRouter.use('/add', (req, res) => {
  let campaign = new campaignsModel({name: req.body.name, data: req.body.data, imgUrl: req.body.imgUrl})
  campaign.save((err, success) => {
    if (err) {
      return console.error(err);
    }
    res.sendStatus(200)
  })
})

export default campaignsRouter