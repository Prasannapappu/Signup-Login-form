const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const signupSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
});
const model = mongoose.model("customer", signupSchema);
module.exports = model;
