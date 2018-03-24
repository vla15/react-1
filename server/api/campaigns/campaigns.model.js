import mongoose from 'mongoose';

const campaignsSchema = mongoose.Schema({
  name: String,
  data: String,
  imgUrl: String,
})

const campaignsModel = mongoose.model('Campaigns', campaignsSchema);

export default campaignsModel