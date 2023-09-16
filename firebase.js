// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcEuqLpZsY80t90W3OcXCkmK0Vq1fI6kM",
  authDomain: "guessthecapital.com",
  projectId: "capitals-game-43aa4",
  storageBucket: "capitals-game-43aa4.appspot.com",
  messagingSenderId: "313370284240",
  appId: "1:313370284240:web:89cd18f270431d4f1dced5",
  measurementId: "G-06QHXJBLWC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
