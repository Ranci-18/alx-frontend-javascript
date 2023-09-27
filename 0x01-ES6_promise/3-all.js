import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
      .then((property) => {
        console.log(`${property[0].body} ${property[1].firstName} ${property[1].lastName}`)
      })
      .catch(() => console.log('Signup system offline'));
}
