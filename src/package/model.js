import mongoose from 'mongoose';

const PackageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  id: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  publisher: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  public: {
    type: Boolean,
    default: true,
  },
  access: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  versions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'version',
    },
  ],
}, {
  timestamps: true,
});

const PackageModel = mongoose.model('package', PackageSchema);

export default PackageModel;
