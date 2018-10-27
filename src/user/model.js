import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Individual', 'Organization'],
    index: true,
  },
  social: {
    twitter: String,
    github: String,
  },
  packages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'package',
    },
  ],
}, {
  timestamps: true,
});

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
