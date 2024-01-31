/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const filtered = students.filter((student) => student.location === city);

  return filtered.map((student) => ({
    ...student,
    grade: newGrades.find((grade) => grade.studentId === student.id)?.grade ?? 'N/A',
  }));
}
/* eslint-disable */