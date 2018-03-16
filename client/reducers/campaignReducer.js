import { ADD_CAMPAIGN, REMOVE_CAMPAIGN } from '../actions/campaignAction';

const initialState = {
  campaigns: {}
}

export const campaignReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CAMPAIGN:
      return {
        ...initialState,
        campaigns: {
          ...campaigns,
          [action.payload.id]: action.payload
        }
      };
    case REMOVE_CAMPAIGN:
      let keyToRemove = action.payload.id
      return {
        ...initialState,
        campaigns: {
          ...campaigns,
          keyToRemove
        }
      }
    default:
      return state;
  }
}
