const router = require("express").Router();
const mongoose = require("mongoose");
const Message = mongoose.model("Message");

router.get("/messages", async (req, res) => {
  var io = req.app.get("socketio");
  Message.find({}, (err, messages) => {
    io.emit("messages", messages);
    res.send(messages);
  });
});

router.post("/messages", async (req, res) => {
  var io = req.app.get("socketio");
  var message = new Message(req.body);
  message.save((err) => {
    if (err) sendStatus(500);
    io.emit("message", req.body);
    res.sendStatus(200);
  });
});

module.exports = router;
