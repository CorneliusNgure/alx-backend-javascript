export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeEntry = newGrades.find((entry) => entry.studentId === student.id);

      const grade = gradeEntry ? gradeEntry.grade : 'N/A';

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade,
      };
    });
}
