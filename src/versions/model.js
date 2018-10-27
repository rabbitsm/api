import mongoose from 'mongoose';

const VersionScheme = mongoose.Schema({
  id: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'package',
  },
}, {
  timestamps: true,
});

const VersionModel = mongoose.model('version', VersionScheme);

export default VersionModel;
