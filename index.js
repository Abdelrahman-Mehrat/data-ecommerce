const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./products");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to our online shop");
});
app.get("/products", (req, res) => {
  res.send(products);
});
app.get(`/homeproduct/products/:id`, (req, res) => {
  let idNum=req.params.id
  console.log(idNum);
  res.send(products[idNum-1]);
});
const port = process.env.port || 5000;
app.listen(port, console.log("Welcome Abdo on port 5000"));
