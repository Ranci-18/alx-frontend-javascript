import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoContent = await uploadPhoto();
    const userContent = await createUser();
    return { photo: photoContent, user: userContent };
  } catch (error) {
    return { photo: null, user: null };
  }
}
