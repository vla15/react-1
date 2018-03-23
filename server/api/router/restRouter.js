const express = require('express');
const campaignsRouter = require('../campaigns/campaigns.restRouter');

const restRouter = express.Router();

restRouter.use('/campaign', campaignsRouter)

module.exports = restRouter