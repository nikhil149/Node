const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product");
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: JSON.parse(JSON.stringify(req.body.title)) });
  res.redirect("/");
});

module.exports = {
  routes: router,
  products,
};
