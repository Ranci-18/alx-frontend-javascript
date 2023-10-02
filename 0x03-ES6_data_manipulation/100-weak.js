export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const endpointCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, endpointCount);

    if (endpointCount >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, 1);
  }
}
