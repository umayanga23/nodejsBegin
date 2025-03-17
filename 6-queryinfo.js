const express = require('express');
const app = express();
const { products } = require('./data');

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

// Get All Products
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// Get Single Product by ID
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id === Number(productID));
  if (!singleProduct) {
    return res.status(404).send('Product does not exist');
  }
  res.json(singleProduct);
});

// Review Route Example
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('Hello world');
});

// Query Parameters (Search and Limit)
app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.toLowerCase().startsWith(search.toLowerCase());
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

// Start Server
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
