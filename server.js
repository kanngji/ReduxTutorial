const express = require("express");

const app = express();

const PORT = 5000;

app.use("/", (req, res) => {
  res.send("sadfsadf");
});

app.listen(PORT, () => {
  console.log(`This server is running at ${PORT}`);
});
