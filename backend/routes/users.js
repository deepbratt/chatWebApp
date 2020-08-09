const router = require("express").Router();
const mongoose = require("mongoose");
const Users = mongoose.model("Users");

router.get("/", async (req, res) => {
  const users = await Users.find({});
  res.send(users);
});

router.post("/login", async (req, res) => {
  const userData = await Users.findOne(
    { email: req.body.email, password: req.body.password },
    (err, user) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!user) {
        return res.send("invalid");
      }
      return res.send(user);
    }
  );
});

router.post("/signup", async (req, res) => {
  const newUser = new Users();
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  await newUser.save((err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
  res.send(newUser);
});

module.exports = router;
