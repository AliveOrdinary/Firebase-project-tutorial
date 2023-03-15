// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUW51y1yHkD-gP2DGB-2HuJ7-76KgxGWc",
  authDomain: "augmented-ward-339219.firebaseapp.com",
  projectId: "augmented-ward-339219",
  storageBucket: "augmented-ward-339219.appspot.com",
  messagingSenderId: "701504197547",
  appId: "1:701504197547:web:96d7be3e0fdb8f397378ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
