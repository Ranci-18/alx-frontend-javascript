export default function appendToEachArrayValue(array, appendString) {
  const Finarr = [];
  for (const idx of array) {
    const value = idx;
    Finarr.push(appendString + value);
  }

  return Finarr;
}
