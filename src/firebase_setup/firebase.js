// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaEw66k8TpOHsR96-DXk4Qmgc3hmuVGlg",
  authDomain: "ninth-north-v1.firebaseapp.com",
  projectId: "ninth-north-v1",
  storageBucket: "ninth-north-v1.appspot.com",
  messagingSenderId: "887808296807",
  appId: "1:887808296807:web:7d57460ef6848bc66ed1c2",
  measurementId: "G-01DJYTEL0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);