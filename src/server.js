const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Couverture de code IFRI",
    status: true,
  });
});

app.get("/greating", (req, res) => {
  return res.status(200).json({
    message: "Hello world",
    status: true,
  });
});

app.get("/greating-again", (req, res) => {
  return res.status(200).json({
    message: "Hello world again",
    status: true,
  });
});

let server = app.listen(port, () => {
  console.log(`Application server running on ${port}`);
});

module.exports = server;
