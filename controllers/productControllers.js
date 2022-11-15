const Product = require("../models/productModel");
const mongoose = require("mongoose");

const getAllProduct = async (req, res) => {
  Product.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const createProduct = async (req, res) => {
  Product.create({
    title: req.body.title,
    description: req.body.description,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};

const deleteProduct = async (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};

const updateProduct = async (req, res) => {
  Product.findByIdAndUpdate(
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
module.exports = { createProduct, getAllProduct, deleteProduct, updateProduct };
