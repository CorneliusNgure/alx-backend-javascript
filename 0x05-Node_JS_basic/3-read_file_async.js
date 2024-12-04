const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the file content into lines
      const lines = data.split('\n');

      const studentsByField = {};
      const fieldCounts = {};

      let totalStudents = 0;

      for (const line of lines) {
        if (line.trim() && !line.startsWith('firstname')) { // Skip empty lines and header
          totalStudents += 1;

          // Split the line into fields (CSV format)
          const row = line.split(',');
          const field = row[3]; // Field of study is in the 4th column
          const firstName = row[0]; // First name is in the 1st column

          // Group students by their field
          if (studentsByField[field]) {
            studentsByField[field].push(firstName);
          } else {
            studentsByField[field] = [firstName];
          }

          // Count the number of students in each field
          if (fieldCounts[field]) {
            fieldCounts[field] += 1;
          } else {
            fieldCounts[field] = 1;
          }
        }
      }

      console.log(`Number of students: ${totalStudents}`);
      for (const [field, count] of Object.entries(fieldCounts)) {
        const studentList = studentsByField[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
      }

      // Resolve the promise
      resolve();
    });
  });
}

module.exports = countStudents;
