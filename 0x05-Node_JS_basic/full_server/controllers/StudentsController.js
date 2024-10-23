import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2]; // Get the database file path from command line argument

    try {
      const students = await readDatabase(filePath);
      let responseText = 'This is the list of our students\n';

      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      sortedFields.forEach((field) => {
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      return res.status(200).send(responseText.trim());
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const filePath = process.argv[2]; // Get the database file path from command line argument

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(filePath);
      const majorStudents = students[major];

      if (majorStudents) {
        return res.status(200).send(`List: ${majorStudents.join(', ')}`);
      }
      return res.status(200).send('List:');
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
