export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const idx = array.indexOf(value);
    const val = `${appendString}${value}`;
    array[idx] = val;
  }

  return array;
}
