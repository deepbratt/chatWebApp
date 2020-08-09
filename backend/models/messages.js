const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const message_schema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  message: {
    type: String,
    required: "msg is required",
  },
  registrationDate: {
    type: String,
    default: Date.now,
  },
});

message_schema.plugin(uniqueValidator);

module.exports = mongoose.model("Message", message_schema);
