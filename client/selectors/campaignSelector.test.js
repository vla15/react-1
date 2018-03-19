import { getFormattedCampaigns, getCampaigns } from './campaignSelector';
import { initialState, campaignReducer } from '../reducers/campaignReducer';
import { campaignActions } from '../actions/campaignAction';

let campaigns;
let state;
let testCampaignReducer;
beforeEach(() => {
    campaigns = {
    1: {
      id: 1,
      data: 'set',
      imgUrl: 'biggest'
    },
    2: {
      id: 2,
      data: 'test',
      imgUrl: 'big test'
    }
  }
  testCampaignReducer = {
    campaigns: campaigns
  };
  state = {
    campaignReducer: testCampaignReducer
  }
})

test("it should recompute once when new campaigns are added to the store state", () => {
  let actionOne = campaignActions.addCampaign(campaigns[1]);
  let actionTwo = campaignActions.addCampaign(campaigns[2]);
  let testState = campaignReducer(undefined, actionOne);
  let resultState = { campaigns: { 1: campaigns[1] } };
  expect(testState).toEqual(resultState);
  testState = {
    campaignReducer: testState
  };
  getFormattedCampaigns(testState);
  expect(getFormattedCampaigns.recomputations()).toBe(1);
});

test('it should return an empty array if there are no campaigns', () => {
  let emptyState = {
    campaignReducer: {
      campaigns: {}
    }
  }
  expect(getFormattedCampaigns(emptyState)).toEqual([]);
})

test('it should format the existing state campaigns into an array', () => {
  expect(getFormattedCampaigns(state)).toEqual([campaigns[1], campaigns[2]]);
})