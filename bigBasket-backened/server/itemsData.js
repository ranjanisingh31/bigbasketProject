const mongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongoose").Types.ObjectId;

const mongoUrl =
  "mongodb+srv://ranjaniSingh_31:1331@cluster0-6phr2.mongodb.net/test?retryWrites=true&w=majority";

class Item {
  getDetails(productType, callback) {
    console.log("in getDetails");
    mongoClient.connect(mongoUrl, (err, client) => {
      if (err) {
        console.log("error connecting to database");
        client.close();
        callback(null);
      }
      console.log("connected");
      const db = client.db("items");
      const details = db.collection("details");
      details.find({ type: productType }).toArray((error, detail) => {
        if (error) {
          console.log("error finding the data", error);
          client.close();
          callback(null);
        } else {
          client.close();
          console.log("details", detail);
          callback(detail);
        }
      });
    });
  }
  getType(callback) {
    mongoClient.connect(mongoUrl, (err, client) => {
      if (err) {
        console.log("error in connecting databse (topic)");
        client.close();
        callback(null);
      }
      const db = client.db("items");
      const details = db.collection("details");
      details.distinct("type", (error, detail) => {
        if (error) {
          client.close();
          callback(null);
        }
        client.close();
        callback(detail);
      });
    });
  }

  setShippingDetails(data, callback) {
    mongoClient.connect(mongoUrl, (err, client) => {
      if (err) {
        console.log("error in posting data to database");
        client.close();
        callback(null);
      }
      const db = client.db("items");
      var shippingDetails = db.collection("shippingDetails");
      shippingDetails.insertOne(data, (error) => {
        if (error) {
          console.log("error in inserting formValues");
          client.close();
          callback(null);
        }
        console.log("submitted");
        client.close();
        callback("completed12345");
      });
    });
  }
}

module.exports = Item;
