import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD2ScMX6-ghRGbSkx1iYm10dspi-bvl_jE',
  authDomain: 'users-8eee3.firebaseapp.com',
  projectId: 'users-8eee3',
  storageBucket: 'users-8eee3.appspot.com',
  messagingSenderId: '656554196365',
  appId: '1:656554196365:web:d324cde9adb719a79011c4',
  measurementId: 'G-7QT5QDD49N',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const items = collection(db, 'items');

export { items };
