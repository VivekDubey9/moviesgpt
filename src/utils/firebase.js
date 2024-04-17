import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpf0u_tGxi_uChR6rRyT7UmPBAF1kgiTg",
  authDomain: "moviegpt-1ad36.firebaseapp.com",
  projectId: "moviegpt-1ad36",
  storageBucket: "moviegpt-1ad36.appspot.com",
  messagingSenderId: "327961870917",
  appId: "1:327961870917:web:776f73b40f62e81849992c",
  measurementId: "G-J9D613D5J5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
