export default function getListStudentsByLocation(myArray, city) {
  return myArray.filter((student) => student.city === city);
}
