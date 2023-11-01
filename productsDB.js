const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require("./db/connect"); 
const Product = require('./models/product');
const ProductJson = require('./products.json')
const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL); // Invoke the connectDB function and use await
      await Product.create(ProductJson);
      console.log('success')
    } catch (err) {
      console.error(err); // Use console.error to log errors
    }
  };
  
  start();