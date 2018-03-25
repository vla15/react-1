import React from 'react'
import CampaignItem from '../campaign-item/campaign-item.jsx';
import CampaignForm from '../../campaign-form/campaign-form.jsx';

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
  }

  componentWillMount() {
    fetch("http://localhost:3000/api/campaigns")
      .then(res => res.json())
      .then(campaigns => campaigns.forEach(campaign => this.addCampaign(campaign)));
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
    return this.props.campaigns.map((campaign, key) => (
      <CampaignItem key={key} campaign={campaign} />
    ));
  }

  render() {
    return <div className="current-campaign-body">
        <CampaignForm addCampaign={this.addCampaign} active={this.state.modalActive} onClose={this.toggleModal}/>
        <div className="current-campaign-list">
          {this.renderCampaigns()}
        </div>
        <div className="button-well-container">
          <div className="button-well">
            <button className="add-campaign-button" onClick={this.toggleModal}>
              +
            </button>
          </div>
        </div>
      </div>;
  }
}

export default CurrentCampaign;