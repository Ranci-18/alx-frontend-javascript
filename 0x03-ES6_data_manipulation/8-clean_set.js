export default function cleanSet(set, startString) {
  const setArray = [...set];
  const filteredSet = setArray.filter((element) => element.startsWith(startString));
  const cleanedSet = filteredSet.map((element) => element.slice(startString.length));
  const resultantString = cleanedSet.join('-');
  return resultantString;
}
