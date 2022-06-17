export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const value of array) {
    const val = `${appendString}${value}`;
    res.push(val);
  }

  return res;
}
