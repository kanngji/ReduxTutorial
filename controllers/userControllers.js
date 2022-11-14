const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log(user);
    if (user) {
      const validPass = await bcrypt.compare(password, user.password);
      // console.log(validPass);
      if (validPass) {
        res.status(200).json("valid Email and pass! 로그인 완료");
      } else {
        res.json("wrong pass!");
      }
    } else {
      res.status(404).json("user not found");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Something broke!");
  }
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
