const http = require('http');
const url = require('url');
const fs = require('fs').promises;

const path = process.argv[2]; // Path to the database is passed as a command-line argument

// Helper function to count students
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

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    // Respond with Hello Holberton School! for the root URL
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Handle the /students route and call countStudents
    try {
      const studentData = await countStudents(path);
      res.write(studentData); // Write the returned student data to the response
    } catch (err) {
      res.write(err.message); // Handle the error case
    }

    res.end(); // End the response
  } else {
    // Handle unknown routes with a 404 response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
