export default function createIteratorObject (report) {
  const keys = Object.keys(report);
  const iterator = {
    next () {
      const key = keys.shift();
      return {
        value: key,
        done: key === undefined
      };
    }
  };
  return iterator;
}
