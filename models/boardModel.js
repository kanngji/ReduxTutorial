const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("Board", boardSchema);
