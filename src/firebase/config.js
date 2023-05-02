// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyz8EMRbGZze4dp54_sOeonmVlv503odY",
  authDomain: "proyecto-coder-tomaslelli.firebaseapp.com",
  projectId: "proyecto-coder-tomaslelli",
  storageBucket: "proyecto-coder-tomaslelli.appspot.com",
  messagingSenderId: "911312237844",
  appId: "1:911312237844:web:d69507e3238e08d963fe01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app