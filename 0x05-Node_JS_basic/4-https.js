const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response header for plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Write the response body
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
