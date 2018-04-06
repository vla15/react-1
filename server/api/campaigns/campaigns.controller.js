import campaignsModel from './campaigns.model';

export const getAllCampaigns = (req, res, next) => {
  campaignsModel.find({})
  .then(campaigns => res.json({campaigns: campaigns}))
  .catch(err => console.error(err));
};

export const addCampaign = (req, res, next) => {
  let campaign = new campaignsModel({
    name: req.body.name,
    data: req.body.data,
    imgUrl: req.body.imgUrl
  });
  campaign.save()
  .then(success => {
    res.sendStatus(200)
    next();
  })
  .catch(err => console.error(err))
};

export const removeCampaign = (req, res, next) => {
  campaignsModel.findByIdAndRemove(req.params.id)
  .then(() => res.sendStatus(201))
  .catch(err => console.error(err));
}
