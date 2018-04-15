import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

userSchema.methods = {
  //overwrites the original methods object with a new object containing two methods auth and hashPW
  //compares sync by rerunning hash with salt against it
  authenticate(plaintTextPassword) {
    return bcrypt.compareSync(plaintTextPassword, this.password);
  },

  hashPassword(plaintTextPassword) {
  if (!plaintTextPassword) {
    throw new Error('Could not save user')
  }

  //salts the password with bcrypt before hashing
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(plaintTextPassword, salt)
  }
}

const UserModel = mongoose.model('User', userSchema)
export default UserModel;