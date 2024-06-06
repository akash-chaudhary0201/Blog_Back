const mongoose = require("mongoose");

const dbConnect = () => {
  return mongoose
    .connect("mongodb://localhost:27017/blogDatabase")
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      throw err;
    });
};

module.exports = dbConnect;
