const http = require('http');
const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n');
      const studentsByField = {};
      let totalStudents = 0;

      for (const line of lines) {
        if (line.trim() && !line.startsWith('firstname')) { // Skip empty lines and header
          const row = line.split(',');
          if (row.length >= 4) { // Ensure there are enough columns
            const firstName = row[0].trim(); // First name is in the 1st column
            const field = row[3].trim(); // Field of study is in the 4th column

            if (firstName && field) {
              totalStudents += 1;

              if (!studentsByField[field]) {
                studentsByField[field] = [];
              }
              studentsByField[field].push(firstName);
            }
          }
        }
      }

      let output = `Number of students: ${totalStudents}`;
      for (const [field, students] of Object.entries(studentsByField)) {
        const count = students.length;
        const studentList = students.join(', ');
        output += `\nNumber of students in ${field}: ${count}. List: ${studentList}`;
      }

      resolve(output);
    });
  });
}

// Create HTTP server
const app = http.createServer((req, res) => {
  const databaseFile = 'database.csv'; // Path to the database file

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(databaseFile)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.end(data);
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
