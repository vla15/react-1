import { campaignActions } from "../../../actions/campaignAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFormattedCampaigns, getCampaigns, getNonFormattedCampaigns } from "../../../selectors/campaignSelector"
import CampaignItemDetail from '../body/campaign-item-detail/campaign-item-detail.jsx';

const mapStateToProps = state => {
  return {
    campaigns: getNonFormattedCampaigns(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeCampaign: campaign => dispatch(campaignActions.removeCampaign(campaign)),
  };
};

const campaignItemDetailContainer = connect(mapStateToProps, mapDispatchToProps)(CampaignItemDetail);

export default campaignItemDetailContainer