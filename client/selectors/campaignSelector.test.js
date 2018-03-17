import { getFormattedCampaigns } from './campaignSelector';
import { initialState } from '../reducers/campaignReducer';

let dummyCampaign;

beforeEach(() => {
  dummyCampaign = {
    id: 2,
    data: 'test',
    imgUrl: 'big test'
  }
})

test('it should return an empty array if there are no values in the store', () => {

})