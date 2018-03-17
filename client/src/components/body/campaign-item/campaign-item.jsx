import React from 'react';

const CampaignItem = ({campaign}) => (
  <div>
    <div>{campaign.id}</div>
    <div>{campaign.data}</div>
    <div>{campaign.imgUrl}</div>
  </div>
)

export default CampaignItem;