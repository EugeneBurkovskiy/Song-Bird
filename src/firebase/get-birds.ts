import { child, get } from 'firebase/database';
import { dbRef } from './firebase-config';

export const getBirds = async () => {
  const res = await get(child(dbRef, `birds`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw Error;
    }
  });
  return res;
};
