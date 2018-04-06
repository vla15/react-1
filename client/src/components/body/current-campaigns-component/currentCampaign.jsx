import React from 'react'
import CampaignItem from '../campaign-item/campaign-item.jsx';
import CampaignForm from '../../campaign-form/campaign-form.jsx';
import { Route, Link } from 'react-router-dom';

class CurrentCampaign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalActive: false,
    }
    this.addCampaign = this.addCampaign.bind(this);
    this.removeCampaign = this.removeCampaign.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.renderCampaigns = this.renderCampaigns.bind(this);
    this.loadCampaigns = this.loadCampaigns.bind(this);
  }

  componentWillMount() {
    //need to load current campaings based on user
    this.loadCampaigns()
  }

  async loadCampaigns() {
    let data = await fetch("http://localhost:3000/api/campaigns")
    data = await data.json();
    this.props.loadCampaign(data.campaigns);
  }

  addCampaign(campaign) {
    this.props.addCampaign(campaign);
  }

  removeCampaign(campaign) {
    this.props.removeCampaign(campaign);
  }

  toggleModal() {
    this.setState((prevState) => {
      return {
        modalActive: !prevState.modalActive
      }
    })
  }

  renderCampaigns() {
    return this.props.campaigns.map((campaign, key) => {
      return <CampaignItem key={key} campaign={campaign}>
        <Link className="caption-link" to={`${this.props.match.url}/${campaign._id}`}/>
      </CampaignItem>
    })
  }

  render() {
    return <div className="current-campaign-body">
        <CampaignForm addCampaign={this.addCampaign} active={this.state.modalActive} onClose={this.toggleModal} />
        <div className="current-campaign-list">
          {this.renderCampaigns()}
          <div className="campaign-item-box">
            <div className="empty-campaign-item">
              <div className="button-well-container">
                <div className="button-well">
                  <button className="add-campaign-button" onClick={this.toggleModal}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default CurrentCampaign;