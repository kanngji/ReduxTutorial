const express = require("express");
const {
  createBoard,
  getAllBoard,
  deleteBoard,
  updateBoard,
} = require("../controllers/boardControllers");
const router = express.Router();
router.get("/posts", getAllBoard);
router.post("/create", createBoard);
router.delete("/delete/:id", deleteBoard);
router.put("/update/:id", updateBoard);

module.exports = router;
