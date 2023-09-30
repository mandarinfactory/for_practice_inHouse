import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVwyf04ma-kdXRRalPlNJkHb5XDeS0rso",
  authDomain: "authentication-react-movie.firebaseapp.com",
  projectId: "authentication-react-movie",
  storageBucket: "authentication-react-movie.appspot.com",
  messagingSenderId: "826749293745",
  appId: "1:826749293745:web:7906230a252db08363fe90",
  measurementId: "G-5CQEC6G7SB",
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
