// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVJmvmO8N4somfT3atpdYC1VNHUWpYWto",
  authDomain: "email-password-authentic-39c16.firebaseapp.com",
  projectId: "email-password-authentic-39c16",
  storageBucket: "email-password-authentic-39c16.appspot.com",
  messagingSenderId: "649570387363",
  appId: "1:649570387363:web:53156183da45892185c616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth