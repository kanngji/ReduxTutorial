const Board = require("../models/boardModel");
const mongoose = require("mongoose");

const getAllBoard = async (req, res) => {
  Board.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const createBoard = async (req, res) => {
  Board.create({
    title: req.body.title,
    description: req.body.description,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};

const deleteBoard = async (req, res) => {
  Board.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};

const updateBoard = async (req, res) => {
  Board.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      title: req.body.title,
      description: req.body.description,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};

// 모듈 꺼내기
module.exports = { createBoard, getAllBoard, deleteBoard, updateBoard };
