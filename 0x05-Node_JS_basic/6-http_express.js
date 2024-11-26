const express = require('express');

// instance of an Express app
const app = express();

// Definition of the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Express server is running on port 1245');
});

module.exports = app;
