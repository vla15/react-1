import { initialState, campaignReducer } from './campaignReducer';
import { ADD_CAMPAIGN, REMOVE_CAMPAIGN, campaignActions } from '../actions/campaignAction';

let dummyCampaign;

beforeEach(() => {
  dummyCampaign = {
    _id: 1,
    name: 'hey there',
    data: 'glob',
    imgUrl: 'www.testurl.com'
  }
})

test('it should initialize to intial state', () => {
  let fakeAction = {type: 'null'};
  let result = campaignReducer(undefined, fakeAction);
  expect(result).toBe(initialState);
})

test('it should add a campaign to the store, when ADD_CAMPAIGN is dispatched', () => {
  const newCampaign = campaignActions.addCampaign(dummyCampaign);
  const result = campaignReducer(undefined, newCampaign);
  const finalState = {campaigns: {1: {...dummyCampaign}}};
  expect(result).toEqual(finalState);
})

test('it should remove a campaign from the store, when REMOVE_CAMPAIGN is dispatched', () => {
  const addAction = campaignActions.addCampaign(dummyCampaign);
  let result = campaignReducer(undefined, addAction);
  const removeAction = campaignActions.removeCampaign(dummyCampaign);
  result = campaignReducer(result, removeAction);
  expect(result).toEqual(initialState);
})

test('it should return previous store state if target id doesnt exist in store', () => {
  const addAction = campaignActions.addCampaign(dummyCampaign);
  let result = campaignReducer(undefined, addAction);
  const unableToRemoveAction = campaignActions.removeCampaign({type: REMOVE_CAMPAIGN, payload: {_id: 4, name: 'test', data: '', imgUrl: ''}});
  expect(campaignReducer(result, unableToRemoveAction)).toEqual(result);
})