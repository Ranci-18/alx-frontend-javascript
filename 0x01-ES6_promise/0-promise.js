/* module defining a promise function */
export default function getResponseFromAPI() {
  const login = true;
  return new Promise((resolve, reject) => {
      if (login) {
        resolve()
      } else {
        reject();
      }
  });
}
