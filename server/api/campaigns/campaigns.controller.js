import campaignsModel from './campaigns.model';
import fs from 'fs';

export const getAllCampaigns = (req, res, next) => {
  campaignsModel.find({})
  .then(campaigns => {
    let clones = campaigns.map((c) => {
      let clone = Object.assign({}, c);
      clone.img = new Buffer(c.img.data).toString("base64");
      return clone;
    })
    res.json({campaigns: clones})
  })
  .catch(err => console.error(err));
};

export const getCampaign = (req, res, next) => {
  campaignsModel.findOne({_id: req.params.id})
  .then(campaign => {
    let base64 = new Buffer(campaign.img.data).toString('base64')
    let clone = Object.assign({}, campaign);
    clone.img = base64;
    res.json({campaign: clone, img: base64})
  })
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
  let buffer = fs.readFileSync(req.file.path)
  campaignsModel.findOne({_id: req.params.id})
  .then(campaign => {
    Object.assign(campaign, {img: {data: buffer, contentType: 'image/png'}})
    return campaign.save();
  })
  .then(c => {
    let base64 = new Buffer(c.img.data).toString('base64')
    res.json({imgData: base64});
  })
}

export const removeCampaign = (req, res, next) => {
  campaignsModel.findByIdAndRemove(req.params.id)
  .then(() => res.sendStatus(201))
  .catch(err => console.error(err));
}