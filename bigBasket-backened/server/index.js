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

app.post("/shippingDetail", function(req, res) {
  let data = {
    name: req.body.name,
    email: req.body.email,
    address: {
      street1: req.body.street1,
      street2: req.body.street2,
      city: req.body.city,
      state: req.body.state,
      postalCode: req.body.postalCode
    },
    mob: req.body.mob
  };
  item.setShippingDetails(data, result => {
    console.log("saved formData");
    res.status(200).send(result);
  });
});
// app.put("/addToCart", function(req, res) {
//   console.log("added");
//   console.log(req.body);
//   res.json({});
// });
app.listen(3001);
