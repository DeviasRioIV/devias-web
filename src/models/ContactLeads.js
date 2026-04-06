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
  company: {
    type: String,
    minlength: 2,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, 'Invalid Email']
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  smsConsent: {
    type: Boolean,
    required: true,
    default: false
  },
  message: {
    type: String,
    minlength: 15,
    required: true,
    trim: true
  }
},
{
  timestamps: true,
  versionKey: false
})

export default mongoose.models.ContactLeads || mongoose.model('ContactLeads', schema)
