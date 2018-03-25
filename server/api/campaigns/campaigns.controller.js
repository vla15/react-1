import campaignsModel from './campaigns.model';

export const addCampaign = (req, res, next) => {
  console.log('inside of the addcampaign');
  let campaign = new campaignsModel({
    name: req.body.name,
    data: req.body.data,
    imgUrl: req.body.imgUrl
  });
  campaign.save((err, success) => {
    if (err) {
      return console.error(err);
    }
    res.sendStatus(200);
    next();
  });
}