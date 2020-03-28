const Item = require("./itemsData");
const express = require("express");
const cors = require("cors");
const body = require("body-parser");
const app = express();
let item = new Item();
app.use(cors());
app.use(body.json());

app.get("/getItems/:type", function(req, res) {
  //let type = req.body.type;
  let type = req.params.type;
  console.log("handling API", type, req.params.type);
  item.getDetails(type, results => {
    res.status(200).json(results);
  });
});
app.get("/items/type", function(req, res) {
  console.log(" fetching type");
  item.getType(results => {
    res.status(200).send(results);
  });
});
// app.put("/addToCart", function(req, res) {
//   console.log("added");
//   console.log(req.body);
//   res.json({});
// });
app.listen(3001);
