import React from 'react';
import CurrentCampaignContainer from '../containers/currentCampaignContainer.jsx';
import PastCampaign from './past-campaigns-component/pastCampaign.jsx'
import CampaignItemDetailContainer from '../containers/campaignItemDetailContainer.jsx'
import { Route, Link } from 'react-router-dom'

class Body extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  //implement custom header for body;

  render() {
    return <div className="body-container">
      <div className="campaigns-container-title">
        <Link className="title" to={`${this.props.match.url}/current`}>Current Campaigns</Link>
        <Link className="title" to={`${this.props.match.url}/past`}>PastCampaigns</Link>
      </div>
      <Route exact path={`${this.props.match.path}/current`} component={CurrentCampaignContainer}/>
      <Route path ={`${this.props.match.path}/current/:id`} component={CampaignItemDetailContainer} />
      <Route path={`${this.props.match.path}/past`} component={PastCampaign}/>
    </div>
  }
}

export default Body;