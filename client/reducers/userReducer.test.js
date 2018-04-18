import { initialState, userReducer } from './userReducer';
import { ST_USER, CLEAR_USER, userActions } from '../actions/userAction';

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
  const expected = {...initialState, user: mockUser}
  expect(userReducer(undefined, addUserAction)).toEqual(expected);
})