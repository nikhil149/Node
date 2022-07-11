const Cart = require("./cart");

const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO shop.product (title, price, imageUrl, description) VALUES (?,?,?,?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById() {}

  static fetchAll() {
    return db.execute("SELECT * FROM shop.product");
  }

  static findProductById(id) {
    return db.execute("SELECT * FROM shop.product WHERE shop.product.id = ?", [
      id,
    ]);
  }
};
