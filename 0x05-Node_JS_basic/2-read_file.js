const fs = require('fs');

function countStudents(fileName) {
  // Dictionary to store students grouped by their field of study
  const studentsByField = {};

  // Dictionary to store the count of students in each field
  const fieldCounts = {};

  let totalStudents = 0;

  try {
    // Read the file synchronously and convert it to a string
    const fileContent = fs.readFileSync(fileName, 'utf-8');

    // Split the content into lines
    const lines = fileContent.toString().split('\n');

    // Loop through each line in the file
    for (let i = 0; i < lines.length; i += 1) {
      // Skip empty lines
      if (lines[i]) {
        totalStudents += 1;

        // Split the current line into fields (CSV format)
        const row = lines[i].toString().split(',');

        // Group students by their field of study
        const field = row[3]; // Field of study is in the 4th column (index 3)
        const firstName = row[0]; // First name is in the 1st column (index 0)

        if (studentsByField[field]) {
          // If the field already exists, append the student's first name
          studentsByField[field].push(firstName);
        } else {
          // Otherwise, initialize the field with the student's first name
          studentsByField[field] = [firstName];
        }

        // Update the count of students in the current field
        if (fieldCounts[field]) {
          fieldCounts[field] += 1;
        } else {
          fieldCounts[field] = 1;
        }
      }
    }

    // Exclude the header row from the total count
    const totalStudentsWithoutHeader = totalStudents - 1;

    console.log(`Number of students: ${totalStudentsWithoutHeader}`);

    for (const [field, count] of Object.entries(fieldCounts)) {
      // Skip the header row (field name)
      if (field !== 'field') {
        const studentList = studentsByField[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
