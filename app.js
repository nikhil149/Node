const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next()
});

app.use((req, res, next) => {
  console.log("In the another middleware");
});

app.listen(3000)
