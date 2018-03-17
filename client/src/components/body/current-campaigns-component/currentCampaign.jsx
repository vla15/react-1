import React from 'react'
import CampaignItem from '../campaign-item/campaign-item.jsx';

class CurrentCampaign extends React.Component {
  constructor(props) {
    super(props)
    this.testCampaign = {
      id: 1,
      data: 'hello world',
      imgUrl: 'this might work',
    }
    this.addCampaign = this.addCampaign.bind(this);
    this.removeCampaign = this.removeCampaign.bind(this);
  }

  addCampaign() {
    this.props.addCampaign(this.testCampaign);
  }

  removeCampaign(campaign) {
    this.props.removeCampaign(campaign);
  }

  render() {
    return <div className="current-campaign-body">
        <div className="current-campaign-list">
          {
          this.props.campaigns.map((campaign, key) =>
          <CampaignItem key={key} campaign={campaign} handleClick={() => this.removeCampaign(campaign)}/>)
          }
        </div>
        <div className="button-well">
          <button className="add-campaign-button" onClick={this.addCampaign}>
            +
          </button>
        </div>
      </div>;
  }
}

export default CurrentCampaign;