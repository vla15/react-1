import { ADD_CAMPAIGN, REMOVE_CAMPAIGN } from '../actions/campaignAction';
import * as _ from 'lodash';

export const initialState = {
  campaigns: {}
}

export const campaignReducer = (state = initialState, action) => {
  const currentState = state.campaigns;
  switch(action.type) {
    case ADD_CAMPAIGN:
      return {
        ...state,
        campaigns: {
          ...currentState,
          [action.payload._id]: action.payload
        }
      };
    case REMOVE_CAMPAIGN:
      let removedCampaign = _.omit(currentState, action.payload._id);
      return {
        ...state,
        campaigns: removedCampaign
      }
    default:
      return state;
  }
}
