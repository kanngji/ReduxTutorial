const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  // category
  category: String,
  title: String,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
