import React from 'react';
import CurrentCampaign from './current-campaigns-component/currentCampaign.jsx';
import PastCampaign from './past-campaigns-component/pastCampaign.jsx'

const Body = () => (
  <div className="body-container">
    <div className="past-campaigns-container">
      <div className="title">Past Campaigns</div>
      <CurrentCampaign />
    </div>
    <div className="current-campaigns-container">
      <div className="title">Current Campaigns</div>
      <PastCampaign />
    </div>
  </div>
)

export default Body;