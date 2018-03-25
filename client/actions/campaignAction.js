export const ADD_CAMPAIGN = 'ADD_CAMPAIGN';
export const REMOVE_CAMPAIGN = 'REMOVE_CAMPAIGN';
export const LOAD_CAMPAIGN = 'LOAD_CAMPAIGN';
export const campaignActions = {};

campaignActions.addCampaign = campaign => {
  return {type: ADD_CAMPAIGN, payload: campaign}
};

campaignActions.loadCampaign = campaigns => {
  return {type: LOAD_CAMPAIGN, payload: campaigns}
}

campaignActions.removeCampaign = campaign => {
  return { type: REMOVE_CAMPAIGN, payload: campaign };
};