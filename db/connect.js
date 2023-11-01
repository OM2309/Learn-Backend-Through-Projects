const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("DB Connected");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;

