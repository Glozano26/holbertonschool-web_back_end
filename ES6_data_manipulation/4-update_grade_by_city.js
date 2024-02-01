// export default function updateStudentGradeByCity(students, city, newGrades) {
//   const filtered = students.filter((student) => student.location === city);

//   return filtered.map((student) => ({
//     ...student,
//     grade: newGrades.find((grade) => grade.studentId === student.id)?.grade ?? 'N/A',
//   }));
// }
export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  if (Array.isArray(listStudents)) {
    const newArray = listStudents.filter((value) => value.location === city);
    const arraUpdate = newArray.map((value) => {
      const obj = newGrades.find((val) => val.studentId === value.id);
      if (obj) {
        /* eslint-disable no-param-reassign */
        value.grade = obj.grade;
      } else {
        /* eslint-disable no-param-reassign */
        value.grade = 'N/A';
      }
      return value;
    });
    return arraUpdate;
  }
  return NaN;
}
