const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
    trim: true,
  },
});


const userModel = mongoose.model("user", userSchema);
module.exports = userModel;