import React from 'react';
import LikeButton from '../../like-button/like-button.jsx';

const CampaignItem = ({ campaign, handleClick }) => (
    <div className="campaign-item-box">
      <div className="campaign-item-container">
        <img src={campaign.imgUrl} />
      </div>
    </div>
);

export default CampaignItem;