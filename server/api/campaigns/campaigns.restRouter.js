const express = require('express');

const campaignsRouter = express.Router();

campaignsRouter.use('/add', (req, res) => {
  //adds a campaign
  res.send('added you in the api/campaigns/add route')
})

module.exports = campaignsRouter