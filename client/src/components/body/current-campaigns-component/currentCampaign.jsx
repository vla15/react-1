import React from 'react'
import CampaignItem from '../campaign-item/campaign-item.jsx';
import CampaignForm from '../../campaign-form/campaign-form.jsx';

class CurrentCampaign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalActive: false,
    }
    this.testCampaign = {
      id: 1,
      data: 'hello world',
      imgUrl: 'https://i.imgur.com/QyK5505.jpg',
    }
    this.addCampaign = this.addCampaign.bind(this);
    this.removeCampaign = this.removeCampaign.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addCampaign() {
    this.props.addCampaign(this.testCampaign);
    this.setState({
      modalActive: true,
    })
  }

  removeCampaign(campaign) {
    this.props.removeCampaign(campaign);
  }

  closeModal(e) {
    this.setState({
      modalActive: false,
    })
    e ? e.preventDefault() : null;
  }

  render() {
    return <div className="current-campaign-body">
        <CampaignForm active={this.state.modalActive} onClose={this.closeModal}/>
        <div className="current-campaign-list">
          {
          this.props.campaigns.map((campaign, key) =>
          <CampaignItem key={key} campaign={campaign} handleClick={() => this.removeCampaign(campaign)}/>)
          }
        </div>
        <div className="button-well-container">
          <div className="button-well">
            <button className="add-campaign-button" onClick={this.addCampaign}>
              +
            </button>
          </div>
        </div>
      </div>;
  }
}

export default CurrentCampaign;