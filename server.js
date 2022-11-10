require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

const boardRoutes = require("./routes/board");

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// 보드 게시판
app.use("/board", boardRoutes);
// 개발 게시판
// app.use("/diary",diaryRoutes);
// 로그인, 회원가입
// app.use("/users",userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(PORT, () => {
      console.log(`This server is running at ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
