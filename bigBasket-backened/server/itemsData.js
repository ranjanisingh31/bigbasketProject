const mongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongoose").Types.ObjectId;
const mongoUrl = "mongodb://127.0.0.1:27017/items";
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
          console.log("error finding the data");
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
}

module.exports = Item;
