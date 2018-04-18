import { userActions, SET_USER, CLEAR_USER } from '../actions/userAction';

export const initialState = {
  user: {}
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER:
      let newUser = {};
      let keys = Object.keys(action.payload).forEach(key => newUser[key] = action.payload[key])
      return {
        ...state,
        user: newUser
      };
      break;
    case CLEAR_USER:
      return {
        ...state,
        user: {}
      };
      break;
    default:
      return state;
  }
}