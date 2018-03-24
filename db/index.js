import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const connect = () => {
  return mongoose.connect("mongodb://localhost/react_project", {
    useMongoClient: true
  });
}

export default connect;