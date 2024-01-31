export default function getStudentIdsSum(total) {
  // const filteredStudents = students.filter((total) => student.id >= 0);
  return total.reduce((accumulator, student) => accumulator + student.id, 0);
}
