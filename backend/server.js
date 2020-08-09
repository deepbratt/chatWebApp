const express = require("express");
require("express-async-errors");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("./config/db");

//models
require("./models/users");

//Middleware
app.use(bodyParser.json()).use(morgan("combined"));
app.use("/public", express.static(__dirname + "/public"));
app.use(cors());

//routes
app.use("/api/users", require("./routes/users"));

app.use((req, res, next) => {
  req.status = 404;
  const error = new Error("404! Routes not found");
  next(error);
});

app.use((error, req, res, next) => {
  res.status(req.status || 500).send({
    message: error.message,
    stack: error.stack,
  });
});

var port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
