import React from 'react';

class CampaignItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  async onDelete(e) {
    e.preventDefault();
    let id = this.props.match.params.id;
    let action = await fetch(`http://localhost:3000/api/campaigns/${id}`, {
      method: 'DELETE'
    })
    this.props.history.goBack();
  }

  render() {
    return <div>
      <div>Hi there</div>
      <button onClick={this.onDelete}>DELETE</button>
    </div>
  }
}

export default CampaignItemDetail;