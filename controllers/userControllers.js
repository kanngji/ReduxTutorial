const User = require("../models/userModel");

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
  User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};


module.exports = {
  loginUser,
  signupUser,
};
