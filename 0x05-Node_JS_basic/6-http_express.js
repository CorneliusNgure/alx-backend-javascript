const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
