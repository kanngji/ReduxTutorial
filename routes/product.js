const express = require("express");
const {
  createProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productControllers");

const router = express.Router();
router.get("/posts", getAllProduct);
router.post("/create", createProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);

module.exports = router;
