const express = require("express");
require("express-async-errors");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("./config/db");

//models
require("./models/users");
require("./models/messages");

//Middleware
app.use(bodyParser.json()).use(morgan("combined"));
app.use("/public", express.static(__dirname + "/public"));
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

var http = require("http");
var server = http.createServer(app);
var io = require("socket.io").listen(server);
app.set("socketio", io);
io.on("connection", () => {
  console.log("user connected");
});
//routes
app.use("/api/users", require("./routes/users"));
app.use("/api", require("./routes/messages"));
//message section

//message section ends
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
