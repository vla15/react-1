import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const connect = () => {
  return mongoose.connect("mongodb://localhost/react_project");
}

export default connect;