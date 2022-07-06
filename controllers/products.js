const Product = require("../models/product");
exports.getAddProducts = (req, res, next) => {
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(JSON.parse(JSON.stringify(req.body.title)));
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((product) => {
    res.render("shop", {
      prods: product,
      pageTitle: "Shop",
      path: "/",
    });
  });
};
