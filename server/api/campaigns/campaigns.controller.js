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
  .catch(err => console.error(err)(err, success))
};

export const removeCampaign = (req, res, next) => {
  let target = campaignsModel.find({id: req.body.id}, (err, campaign) => {
    if (err) {
      return console.error(err);
    }
    campaign.remove();
  })
}
