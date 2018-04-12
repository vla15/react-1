import campaignsModel from './campaigns.model';
import fs from 'fs';
import path from 'path';

export const getAllCampaigns = (req, res, next) => {
  campaignsModel.find({})
  .then(campaigns => res.json({campaigns}))
  .catch(err => console.error(err));
};

export const getCampaign = (req, res, next) => {
  campaignsModel.findOne({_id: req.params.id})
  .then(campaign => res.json({campaign}))
  .catch(err => console.error(err));
}

export const addCampaign = (req, res, next) => {
  let campaign = new campaignsModel({
    name: req.body.name,
    data: req.body.data,
  });
  campaign.save()
  .then(success => {
    res.json({_id: success._id})
    next();
  })
  .catch(err => console.error(err))
};

export const uploadImage = (req, res, next) => {
  let _id = req.params.id
  let buffer = fs.readFileSync(req.file.path)
  let base64 = new Buffer(buffer).toString("base64");
  let img = {data: base64, path: req.file.path}
  campaignsModel.findOneAndUpdate({_id}, {img})
  .then(model => model.save())
  .then(success => campaignsModel.findOne({_id}))
  .then(campaign => res.json({campaign}))
  .catch(err => console.error(err));
}

export const removeCampaign = (req, res, next) => {
  campaignsModel.findByIdAndRemove(req.params.id)
  .then((c) => {
    let route = path.resolve(c.img.path);
    console.log(route, typeof route);
    fs.unlinkSync(route);
    res.sendStatus(201);
  })
  .catch(err => console.error(err));
}