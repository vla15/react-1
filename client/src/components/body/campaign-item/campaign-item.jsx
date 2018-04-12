import React from 'react';
import LikeButton from '../../like-button/like-button.jsx';

const CampaignItem = ({ campaign, handleClick, children }) => {
  let imgUrl = campaign.img ? `data:image/png;base64,${campaign.img}` : null;
  return <div className="campaign-item-box">
    <div className="campaign-item-container">
      {children}
      <img src={imgUrl} />
      <div className="campaign-item-caption">
        <div className="caption">{campaign.name}</div>
      </div>
    </div>
  </div>
}

export default CampaignItem;