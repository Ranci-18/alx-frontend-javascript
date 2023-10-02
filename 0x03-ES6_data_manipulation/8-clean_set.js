export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) return '';
  const finalList = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      finalList.push(value.slice(startString.length));
    }
  }
  return finalList.join('-');
}
