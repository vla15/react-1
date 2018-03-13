const initialState = {
  bogus: 'hello'
}

export const bogusReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'HELLO_WORLD':
      return {
        ...initialState,
        bogus: 'no longer'
      };
    default:
      return state;
  }
}
