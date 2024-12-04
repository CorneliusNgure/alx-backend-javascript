const express = require('express');
const countStudents = require('./5-http');

// Create an instance of an Express app
const app = express();

// Define the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students endpoint
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2]; // Get the database file path from command-line arguments
  if (!databasePath) {
    res.status(500).send('Database path not provided');
    return;
  }

  res.write('This is the list of our students\n'); // Send the header first

  try {
    await countStudents(databasePath); // Reuse the function from 5-http.js
  } catch (error) {
    res.end(error.message);
    return;
  }

  res.end(); // End the response
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Express server is running on port 1245');
});

// Export the app for use in other files or testing
module.exports = app;
