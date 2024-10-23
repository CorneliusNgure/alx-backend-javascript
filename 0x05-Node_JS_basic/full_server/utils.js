const fs = require('fs').promises;

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile((filePath), 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    lines.shift(); // Remove header
    const studentFields = {};

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (firstname && field) {
        if (!studentFields[field]) {
          studentFields[field] = [];
        }
        studentFields[field].push(firstname);
      }
    });

    return studentFields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
