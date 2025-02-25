const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end("Welcome home page!");
  }

  if (req.url === '/about') {
    return res.end("Here is the About page.");
  }

  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <h1>404</h1>
    <p>Page not found</p>
  `);
});

// Start the server on port 5000 (or any available port)
server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
