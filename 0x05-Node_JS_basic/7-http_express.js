const express = require('express');
const fs = require('fs').promises;

// Create an instance of the Express application
const app = express();

// Helper function to count students asynchronously
async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      return 'No students found in the file';
    }

    lines.shift(); // Remove the header

    const students = {};
    let totalStudents = 0;

    // Parse each line
    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field) {
        totalStudents += 1;

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    });

    // Prepare the output string
    let output = `Number of students: ${totalStudents}\n`;
    for (const [field, names] of Object.entries(students)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Define a route for '/students'
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2]; // Path to the database is passed as a command-line argument

  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  // Try to fetch the students data from the CSV file
  try {
    const studentData = await countStudents(databasePath);
    res.write(studentData); // Append the student data to the response
  } catch (err) {
    res.write(err.message); // Handle any errors and send error messages in the response
  }

  res.end(); // End the response
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
