const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// routes
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(JSON.parse(JSON.stringify((req.body))));
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to home page</h1>");
});

app.listen(3000);
