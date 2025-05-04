import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtB_BuJM0bliq8bjx8fUVZwQcDiDGJwNE",
  authDomain: "pet-adoption-app-3fec0.firebaseapp.com",
  projectId: "pet-adoption-app-3fec0",
  storageBucket: "pet-adoption-app-3fec0.appspot.com",
  messagingSenderId: "902379855649",
  appId: "1:902379855649:web:696f856628cbabe1e26860",
  measurementId: "G-M7E5VQK3Z0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };