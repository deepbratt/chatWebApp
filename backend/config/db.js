const mongoose = require("mongoose");
require("dotenv").config();
const mongoDBErrors = require("mongoose-mongodb-errors");
const mongoURI = process.env.MONGOURI;

mongoose.Promise = global.Promise;
mongoose.plugin(mongoDBErrors);
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (req, res) {}
);
