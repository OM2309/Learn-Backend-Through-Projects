const express = require("express");
const app = express();
const products_routes = require("./routes/products");
const connectDB = require("./db/connect"); // Fix the path to the connect file

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(); // Invoke the connectDB function and use await
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err) {
    console.error(err); // Use console.error to log errors
  }
};

start();
