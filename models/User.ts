import { Schema, model } from 'mongoose';
import { UserFields } from '../types';

const UserSchema = new Schema<UserFields>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    versionKey: false,
  }
);

UserSchema.pre('save', function(next) {
  console.log('Password hashed');
  this.password = 'hashed pwd'
  next();
})

const User = model('User', UserSchema);

export default User;
