export default function getListStudentIds(myArray) {
  if (Array.isArray(myArray)) {
    return myArray.map((myArray) => myArray.id);
  }
  return [];
}
