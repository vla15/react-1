import React from 'react';
import LikeButton from '../../like-button/like-button.jsx';

let style = {border: '1px black solid'}

const CampaignItem = ({ campaign, handleClick }) => (
    <div className="campaign-item-container" style={style}>
      <img src={campaign.imgUrl} />
      <div className="campaign-item-description">
        <div className="campaign-item-description-box">
          <div className="campaign-item-title">{campaign.name}</div>
        </div>
      </div>
  </div>
);

export default CampaignItem;