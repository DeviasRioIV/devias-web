import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    minlength: 2,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, 'Invalid Email']
  }
},
{
  timestamps: true,
  versionKey: false
})

export default mongoose.models.NewsletterUsers || mongoose.model('NewsletterUsers', schema)