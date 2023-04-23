// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref, child, get } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPJ4UNtdo3QRYQE3xyJKvdbNM_U7TCVjM',
  authDomain: 'songbird-509b0.firebaseapp.com',
  projectId: 'songbird-509b0',
  storageBucket: 'songbird-509b0.appspot.com',
  messagingSenderId: '800476766807',
  appId: '1:800476766807:web:40c093cc39b71e88e7b912',
  databaseURL: 'tps://songbird-509b0-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const dbRef = ref(getDatabase());

export const getBirds = async () => {
  const res = await get(child(dbRef, `birds`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return res;
};

export { auth, db };
