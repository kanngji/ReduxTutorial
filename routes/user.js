const express = require("express");

// controller functions
const { loginUser, signupUser } = require("../controllers/userControllers");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup router
router.post("/signup", signupUser);

module.exports = router;
