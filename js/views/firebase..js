// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDACsM8JXRLdrDSKVX8IY3ztC1adZ82axA",
  authDomain: "gentcod-portfolio.firebaseapp.com",
  projectId: "gentcod-portfolio",
  storageBucket: "gentcod-portfolio.appspot.com",
  messagingSenderId: "430521369333",
  appId: "1:430521369333:web:49c36724b42f1ebad7bbbc",
  measurementId: "G-5KLYEB0GV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);