// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkZlutHlhs3luz8XlOqKkTz4NHC8sI2Cs",
  authDomain: "medium-clone-350.firebaseapp.com",
  projectId: "medium-clone-350",
  storageBucket: "medium-clone-350.appspot.com",
  messagingSenderId: "629534625606",
  appId: "1:629534625606:web:cddc643c875d0184d39f47",
  measurementId: "G-J63K11EQFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);