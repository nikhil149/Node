const express = require("express");

const app = express();

app.use('/add-product',(req, res, next) => {
  console.log("In the middleware");
  res.send('<h1>Add Product</h1>')
});

app.use('/',(req, res, next) => {
  console.log("In the another middleware");
  res.send('<h1>Welcome to home page</h1>')
});

app.listen(3000)
