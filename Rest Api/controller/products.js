const Product = require("../models/products");
const getAllProducts = async (req, res) => {
  const { company } = req.query;
  console.log("c", company);
  const queryObject = {};
  console.log("q", queryObject);
  
  if (company) {
    queryObject.company = company;
    console.log("qc", queryObject.company);
  }

  const myData = await Product.find(queryObject); // doubt
  console.log(myData);
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
