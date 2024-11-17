import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU2FBIDQeUJAL9DH9XQwSTlXL4jR5l2Oo",
  authDomain: "proyecto-final-reactjs-c5e52.firebaseapp.com",
  projectId: "proyecto-final-reactjs-c5e52",
  storageBucket: "proyecto-final-reactjs-c5e52.firebasestorage.app",
  messagingSenderId: "777788009293",
  appId: "1:777788009293:web:b18441defce3548f102504"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db