export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) return '';
  const setArray = [...set];
  const filteredSet = setArray.filter((element) => element.startsWith(startString));
  const cleanedSet = filteredSet.map((element) => element.slice(startString.length));
  const resultantString = cleanedSet.join('-');
  return resultantString;
}
