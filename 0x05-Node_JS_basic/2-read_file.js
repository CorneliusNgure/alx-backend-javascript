const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data by new lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      console.log('No students found in the file');
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
        totalStudents += 1;

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
  } catch (error) {
    // Handle file read errors
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
