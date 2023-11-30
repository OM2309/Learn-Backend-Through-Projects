const mongoose = require('mongoose');

const connectDB = (URL) => {
    console.log("connectDB");
    return  mongoose.connect(URL);
}

module.exports = connectDB;
