import { counterActions, INCREMENT, DECREMENT } from '../actions/counterAction';

export const initialState = {
  counter: 0
}

export const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREMENT:
      let updatedCounter = state.counter === 0 ? 0 : state.counter - 1;
      return {
        ...state,
        counter: updatedCounter
      }
    default:
      return state
  }
}
