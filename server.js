const http = require("http");
const express = require("express");
const app = express();
var cron = require("node-cron");

const port = process.env.PORT || 3000;
const date = new Date();
app.get("/api/problem", (req, res) => {
  const createProblemArray = [];
  res.send(date);
});

app.listen(port, () => {
  console.log("listening " + port);
});
