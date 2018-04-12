import mongoose from 'mongoose';

const campaignsSchema = mongoose.Schema({
  name: String,
  data: String,
  img: {
    data: String,
    path: String
  },
  votes: {
    type: Number,
    min: 0,
    default: 0
  }
})

const campaignsModel = mongoose.model('Campaigns', campaignsSchema);

export default campaignsModel