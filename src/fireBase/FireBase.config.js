// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm53t5sa_28yK7bNEnqYuoK7l92kXkSf4",
  authDomain: "third-firebase-project-d8905.firebaseapp.com",
  projectId: "third-firebase-project-d8905",
  storageBucket: "third-firebase-project-d8905.appspot.com",
  messagingSenderId: "871714765140",
  appId: "1:871714765140:web:0b22a61fb39f7d1571b0c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;