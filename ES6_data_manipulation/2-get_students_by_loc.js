export default function getStudentsByLocation(array1, city) {
  return array1.filter((students) => students.location === city);
}
