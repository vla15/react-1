import mongoose from 'mongoose';

const campaignsSchema = mongoose.Schema({
  createor: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
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
  },
  voters: [
    {type: mongoose.Schema.ObjectId, ref: 'User'}
  ]
})

const campaignsModel = mongoose.model('Campaigns', campaignsSchema);
export default campaignsModel;