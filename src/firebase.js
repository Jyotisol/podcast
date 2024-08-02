// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh9s5FoJnwIXXex2VoMtgr0TS_xx8dLMs",
  authDomain: "podcast-react-3b465.firebaseapp.com",
  projectId: "podcast-react-3b465",
  storageBucket: "podcast-react-3b465.appspot.com",
  messagingSenderId: "137929013935",
  appId: "1:137929013935:web:a6af04efed018434fa325a",
  measurementId: "G-S1LSELS1L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
