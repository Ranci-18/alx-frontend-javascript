/* module defining a promise function */
export default function getResponseFromAPI() {
    const login = true;
    return Promise((resolve, reject) => {
        if (login) {
          resolve()
        } else {
          reject();
        }
    });
}
