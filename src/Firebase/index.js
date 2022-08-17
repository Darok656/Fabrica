// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQh5yDA24A8VGYhPYsqisQJNT0ollWc8Y",
  authDomain: "fabricajabon-f1d05.firebaseapp.com",
  databaseURL: "https://fabricajabon-f1d05-default-rtdb.firebaseio.com",
  projectId: "fabricajabon-f1d05",
  storageBucket: "fabricajabon-f1d05.appspot.com",
  messagingSenderId: "447082439914",
  appId: "1:447082439914:web:22ba5ac53854b9fe716393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// iniciar auth
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//escribir en real time
export const database = getDatabase(app);


