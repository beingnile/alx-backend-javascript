export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const val = `${appendString}${value}`;
    array.setAttribute(value, val);
  }

  return array;
}
