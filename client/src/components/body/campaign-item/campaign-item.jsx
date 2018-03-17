import React from 'react';

let style = {border: '1px black solid'}

const CampaignItem = ({campaign, handleClick}) => (
  <div onClick={handleClick} style={style}>
    <div>{campaign.id}</div>
    <div>{campaign.data}</div>
    <div>{campaign.imgUrl}</div>
  </div>
)

export default CampaignItem;