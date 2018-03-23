import mongoose from 'mongoose';

const db = () => {
  mongoose.connect("mongodb://localhost/react_project");
}

export default db;