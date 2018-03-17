import React from 'react';
import CurrentCampaignContainer from '../containers/currentCampaignContainer.jsx';
import PastCampaign from './past-campaigns-component/pastCampaign.jsx'

const Body = () => (
  <div className="body-container">
    <div className="current-campaigns-container">
      <div className="title">Current Campaigns</div>
      <CurrentCampaignContainer />
    </div>
    <div className="past-campaigns-container">
      <div className="title">Past Campaigns</div>
      <PastCampaign />
    </div>
  </div>
);

export default Body;