import React from 'react';
import CurrentCampaignContainer from '../containers/currentCampaignContainer.jsx';
import PastCampaign from './past-campaigns-component/pastCampaign.jsx'
import { Route, Link } from 'react-router-dom'

class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'current'
    }
    this.renderCampaignBody = this.renderCampaignBody.bind(this);
    this.toggleCategoryChange = this.toggleCategoryChange.bind(this);
  }

  toggleCategoryChange(category) {
    this.setState({
      category: category
    })
  }

  renderCampaignBody() {
    return this.state.category === 'current' ? <CurrentCampaignContainer/> : <PastCampaign/>
  }

  render() {
    return <div className="body-container">
      <div className="campaigns-container-title">
        <div className="title" onClick={() => this.toggleCategoryChange('current')}>Current Campaigns</div>
        <div className="title" onClick={() => this.toggleCategoryChange('past')}>Past Campaigns</div>
      </div>
      {this.renderCampaignBody()}
    </div>
  }
}

export default Body;