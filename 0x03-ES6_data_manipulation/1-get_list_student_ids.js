export default function getListStudentIds(studentsObject) {
  if (!Array.isArray(studentsObject)) {
    return [];
  }

  return studentsObject.map((student) => student.id);
}
