import firebase from "firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase/auth"
import 'firebase/auth'









import { getFirestore, serverTimestamp } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMRjY3bY_4pmfM1Mvyu4WxOW707Rl-Nmo",
  authDomain: "car-app-aae52.firebaseapp.com",
  projectId: "car-app-aae52",
  storageBucket: "car-app-aae52.appspot.com",
  messagingSenderId: "823418612631",
  appId: "1:823418612631:web:5ac35d0db3bd325595b2d2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db







