import { initialState, userReducer } from './userReducer';
import { userActions } from '../actions/userAction';

let mockUser
beforeEach(() => {
  mockUser = {
    _id: 5,
    first: 'testor',
    last: 'helper',
    email: 'blah blah'
  }
})

test('it should set a new user when setnew user action is dispatched', () => {
  const addUserAction = userActions.setUser(mockUser);
  const expected = {...initialState, user: mockUser};
  expect(userReducer(undefined, addUserAction)).toEqual(expected);
})

test('it should clear all users when clear user action is dispatched', () => {
  const addUserAction = userActions.setUser(mockUser);
  const clearUserAction = userActions.clearUser();
  let currentState = userReducer(undefined, addUserAction)
  let expected = {...initialState, user: mockUser};
  expect(currentState).toEqual(expected);
  expect(userReducer(currentState, clearUserAction)).toEqual(initialState);
})