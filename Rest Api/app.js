require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to the database:", err);

    // app.listen(PORT, () => {
    //   console.log(`Server is running without database on http://localhost:${PORT}`);
    // });
  }
};

start();
