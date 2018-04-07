import React from 'react';

class CampaignItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  async onDelete(e) {
    e.preventDefault();
    let id = this.props.match.params.id;
    await fetch(`http://localhost:3000/api/campaigns/${id}`, {
      method: 'DELETE'
    })
    console.log(this.props.history);
    this.props.history.push('/campaigns/current')
    //need to inform backend to delete item
    //then store needs to update with latest information
    //this should update the other store components
    // await this.props.removeCampaign(this.props.campaignsid);
    //need to trigger a refresh on the currentcampaigns page
  }

  render() {
    return <div>
      <div>Hi there</div>
      <button onClick={this.onDelete}>DELETE</button>
    </div>
  }
}

export default CampaignItemDetail;