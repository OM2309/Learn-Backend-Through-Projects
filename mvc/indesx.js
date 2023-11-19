const express = require('express');
const app = express();
const port = 8000;
const productsRoutes = require('./routes/products');

app.use("/api/products", productsRoutes);

app.listen(port, () => {
   console.log(`listening on ${port}`);
});
