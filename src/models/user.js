import mongoose from "mongoose"

const schema = mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "fullname is required"],
    minLength: [3, "fullname must be at least 3 characters"],
    maxLength: [20, "fullname must be at most 20 characters"],
  },
  email: {
    type: String,
    unique: true,
    required:[true, "Email is required"],
    match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  role: String
})

export default mongoose.models.User || mongoose.model('User', schema)