import { createSelector } from 'reselect';

export const getCampaigns = state => state.campaignReducer.campaigns;
const formatCampaigns = campaigns => {
  let formattedCampaigns = campaigns ? Object.keys(campaigns) : [];
  return (formattedCampaigns = formattedCampaigns.map(campaignId => {
    return campaigns[campaignId];
  }));
}

const testingCampaigns = campaigns => {
  return campaigns
}

export const getNonFormattedCampaigns = createSelector(
  getCampaigns,
  testingCampaigns
)

export const getFormattedCampaigns = createSelector(
  getCampaigns,
  formatCampaigns
)