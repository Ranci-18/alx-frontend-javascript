export default function iterateThroughObject (reportWithIterator) {
  const iterator = reportWithIterator[Symbol.iterator]();
  let iteration = iterator.next();
  while (!iteration.done) {
    console.log(iteration.value);
    iteration = iterator.next();
  }
}
