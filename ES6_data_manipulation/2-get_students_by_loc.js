export default function getStudentsByLocation(city) {
  return city.filter((students) => students.location === 'San Francisco');
}
