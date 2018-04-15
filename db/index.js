import mongoose from 'mongoose';
import config from '../config/index.js';
mongoose.Promise = global.Promise;

const connect = () => {
  return mongoose.connect(config.db.url);
}

export default connect;