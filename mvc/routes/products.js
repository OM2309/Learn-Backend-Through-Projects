const { getAllProducts } = require('../controller/products');
const express = require('express');
const router = express.Router();

router.route('/').get(getAllProducts);

module.exports = router;
