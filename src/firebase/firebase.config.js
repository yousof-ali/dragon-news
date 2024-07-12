// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9yY2cl-e-6OaiKpZT-EoWWXxJZi7MxMY",
  authDomain: "dragon-news-eb17e.firebaseapp.com",
  projectId: "dragon-news-eb17e",
  storageBucket: "dragon-news-eb17e.appspot.com",
  messagingSenderId: "897109598830",
  appId: "1:897109598830:web:15db56b2bb6c9e1966bc7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;