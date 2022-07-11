const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const db = require("./util/database");

const errorController = require("./controllers/error");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

db.execute("SELECT * FROM shop.product")
  .then((result) => {
    console.log(result[0]);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
