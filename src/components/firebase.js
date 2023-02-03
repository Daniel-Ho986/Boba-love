// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAUXkceWD1BGSnJsKWZVZRNVfKrnT2608w',
  authDomain: 'boba-love-5e8a4.firebaseapp.com',
  projectId: 'boba-love-5e8a4',
  storageBucket: 'boba-love-5e8a4.appspot.com',
  messagingSenderId: '953248647818',
  appId: '1:953248647818:web:f283cc822f2092b4607b73'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;