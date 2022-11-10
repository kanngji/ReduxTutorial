const express = require("express");

// controller functions
const { loginUser } = require("../controllers/userControllers");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup roter
// router.post("/signup", signupUser);

module.exports = router;
