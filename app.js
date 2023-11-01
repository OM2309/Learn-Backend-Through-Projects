require('dotenv').config();
const express = require("express");
const app = express();
const products_routes = require("./routes/products");
const connectDB = require("./db/connect"); // Fix the path to the connect file
const port =  3000; // Set the default port to 3000 or use the value from the .env file

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL); // Invoke the connectDB function and use await
    app.listen(port, () => { // Use the 'port' variable here
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error(err); // Use console.error to log errors
  }
};

start();
