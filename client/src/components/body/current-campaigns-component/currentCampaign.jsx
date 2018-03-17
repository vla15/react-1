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
    this.checkCampaigns = this.checkCampaigns.bind(this);
  }

  addCampaign() {
    this.props.addCampaign(this.testCampaign);
  }

  checkCampaigns() {
    console.log(this.props.campaigns);
  }

  render() {
    return <div>
        <div className="current-campaign-list">
          {
          this.props.campaigns.map((campaign, key) =>
          <CampaignItem key={key} campaign={campaign}/>)
          }
        </div>
        <div className="button-well">
          <button className="add-campaign-button" onClick={this.addCampaign}>
            +
          </button>
        </div>
        <button onClick={this.checkCampaigns}>Check campaigns</button>
      </div>;
  }
}

export default CurrentCampaign;