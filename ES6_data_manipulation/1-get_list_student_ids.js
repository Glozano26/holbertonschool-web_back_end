export default function getListStudentIds(newArray) {
//   const newArray = getListStudents();
  if (Array.isArray(newArray)) {
    return newArray.map((item) => item.id);
  }
  return [];
}
