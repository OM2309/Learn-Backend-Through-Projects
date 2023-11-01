const getAllProducts = (req, res) => {
  res.status(200).json({
    msg: "getAllProducts",
  });
};
const getAllProductsTesting = (req, res) => {
  res.status(200).json({
    msg: "getAllProductsTesting",
  });
};

module.exports = { getAllProducts, getAllProductsTesting };
