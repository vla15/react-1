export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER'
export const userActions = {}


userActions.setUser = user => {
  return { type: SET_USER, payload: user}
}

userActions.clearUser = () => {
  return { type: CLEAR_USER }
}