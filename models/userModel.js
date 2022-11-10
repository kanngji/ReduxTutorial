const mongoose = require("mongoose");
// bcrpyt 사용하기 해쉬 비번
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  // 이메일
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

// 모듈 꺼내기
module.exports = mongoose.model("User", userSchema);
