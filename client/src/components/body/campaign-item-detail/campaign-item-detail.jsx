import React from 'react';

class CampaignItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      campaign: ''
    }
    this.onDelete = this.onDelete.bind(this);
  }

  async onDelete(e) {
    e.preventDefault();
    let id = this.props.match.params.id;
    await fetch(`http://localhost:3000/api/campaigns/${id}`, {
      method: 'DELETE'
    })
    this.props.history.push('/campaigns/current')
    //need to inform backend to delete item
    //then store needs to update with latest information
    //this should update the other store components
    // await this.props.removeCampaign(this.props.campaignsid);
    //need to trigger a refresh on the currentcampaigns page
  }

  componentDidMount() {
    let id = this.props.match.params.id
    fetch(`http://localhost:3000/api/campaigns/${id}`)
      .then(data => data.json())
      .then(d => {
        if (this.refs.campaignItemDetail) {
            this.setState({
          campaign: d.campaign
            })
        }
      })
  }

  render() {
    let imgUrl = this.state.campaign.img ? `data:image/png;base64,${this.state.campaign.img}` : null;
    return <div ref="campaignItemDetail">
        <img src={imgUrl}/>
        <div>{this.state.campaign.name}</div>
        <button onClick={this.onDelete}>DELETE</button>
    </div>;
  }
}

export default CampaignItemDetail;