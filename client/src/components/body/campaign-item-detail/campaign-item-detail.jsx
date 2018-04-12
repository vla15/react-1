import React from 'react';

class CampaignItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      content: '',
      campaign: ''
    }
    this.onDelete = this.onDelete.bind(this);
    this.renderCampaign = this.renderCampaign.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  async onDelete(e) {
    e.preventDefault();
    let id = this.props.match.params.id;
    await fetch(`http://localhost:3000/api/campaigns/${id}`, {
      method: 'DELETE'
    })
    await this.props.removeCampaign(this.state.campaign);
    this.props.history.push('/campaigns/current')
  }

  componentDidMount() {
    let id = this.props.match.params.id
    fetch(`http://localhost:3000/api/campaigns/${id}`)
      .then(data => data.json())
      .then(d => {
        let campaign;
        let hasError = false;
        if (d.campaign) {
          campaign = d.campaign
        } else {
          hasError = true;
        }
        if (this.refs.campaignItemDetail) {
            this.setState({campaign, hasError})
        }
      })
  }

  renderError() {
    return <div>The campaign you're looking for no longer exists</div>
  }

  renderCampaign() {
    let imgUrl = this.state.campaign.img ? `data:image/png;base64,${this.state.campaign.img.data}` : null;
    return <div ref="campaignItemDetail">
        <img src={imgUrl} />
        <div>{this.state.campaign.name}</div>
        <button onClick={this.onDelete}>DELETE</button>
      </div>;
  }

  render() {
    return this.state.hasError ? this.renderError() : this.renderCampaign();
  }
}

export default CampaignItemDetail;