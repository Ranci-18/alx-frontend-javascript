import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((settledPromises) => {
      const array = [];
      for (const eachSettledPromise of settledPromises) {
        array.push({ status: eachSettledPromise.status, value: eachSettledPromise.value || eachSettledPromise.reason });
      }
      return array;
    });
}
