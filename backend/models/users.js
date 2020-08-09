const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const users_schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "first name is required",
  },
  lastName: {
    type: String,
    required: "last name is required",
  },
  email: {
    type: String,
    required: "email is required",
  },
  password: {
    type: String,
    required: "Password is required",
  },
  registrationDate: {
    type: String,
    default: Date.now,
  },
});

users_schema.plugin(uniqueValidator);

module.exports = mongoose.model("Users", users_schema);
