// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMFZLXH2yh9fZNTZC27w7Ev1YK__xkYkc",
  authDomain: "cineplex-e3833.firebaseapp.com",
  projectId: "cineplex-e3833",
  storageBucket: "cineplex-e3833.appspot.com",
  messagingSenderId: "902381110653",
  appId: "1:902381110653:web:8587facbdf713d5ffd7814",
  measurementId: "G-1DDST2B1FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);