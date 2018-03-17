import React from "react";
import { campaignActions } from "../../../actions/campaignAction";
import currentCampaign from "../body/current-campaigns-component/currentCampaign.jsx"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    campaigns: state.campaignReducer.campaigns
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCampaign: campaign => dispatch(campaignActions.addCampaign(campaign)),
    removeCampaign: campaign => dispatch(campaignAction.removeCampaign(campaign))
  }
}

const currentCampaignContainer = connect(mapStateToProps, mapDispatchToProps)(currentCampaign);

export default currentCampaignContainer;