import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    first: String,
    last: String,
    email: String,
    passwordHash: {
      required: true,
      type: String
    }
  },
  { timestamps: true }
);

const UserModel = mongoose.model('User', userSchema)
export default UserModel;