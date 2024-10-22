const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf8')
      .then((data) => {
        // Split the data by new lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
          console.log('No students found in the file');
          resolve();
          return;
        }

        // Remove the header (first line)
        lines.shift();

        const students = {};
        let totalStudents = 0;

        // Parse the remaining lines
        lines.forEach((line) => {
          const [firstname, lastname, age, field] = line.split(',');

          if (firstname && lastname && age && field) {
            totalStudents += 1; // Increment total student count

            // If the field doesn't exist yet, create an array for it
            if (!students[field]) {
              students[field] = [];
            }

            // Add the student's first name to the corresponding field array
            students[field].push(firstname);
          }
        });

        // Log total number of students
        console.log(`Number of students: ${totalStudents}`);

        // Log the number of students per field and their names
        for (const [field, names] of Object.entries(students)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        resolve();
      })
      .catch(() => {
        // If an error occurs (e.g., file not found), reject the Promise with the appropriate error
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
