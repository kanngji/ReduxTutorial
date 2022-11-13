const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// login user
const loginUser = async (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};

// register
const signupUser = async (req, res) => {
  // User.create({
  //   email: req.body.email,
  //   password: req.body.password,
  // })
  //   .then((doc) => console.log(doc))
  //   .catch((err) => console.log(err));
  try {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await User.create({
      email: email,
      password: hash,
    });
    res.status(200).json("All good");
  } catch (e) {
    console.log(e);
    res.status(500).send("Something broke!");
  }
};

module.exports = {
  loginUser,
  signupUser,
};
