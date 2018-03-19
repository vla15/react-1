import { createSelector } from 'reselect';

export const getCampaigns = state => state.campaignReducer.campaigns;
const formatCampaigns = campaigns => {
  let formattedCampaigns = campaigns ? Object.keys(campaigns) : [];
  return (formattedCampaigns = formattedCampaigns.map(campaignId => {
    return campaigns[campaignId];
  }));
}

export const getFormattedCampaigns = createSelector(
  getCampaigns,
  formatCampaigns
)