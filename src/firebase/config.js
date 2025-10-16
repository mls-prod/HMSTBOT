//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAugjzangT1XjQRASiTAqbF7kuHTE29tzU",
  authDomain: "maxibot-31995.firebaseapp.com",
  projectId: "maxibot-31995",
  storageBucket: "maxibot-31995.firebasestorage.app",
  messagingSenderId: "167179053543",
  appId: "1:167179053543:web:b81776cc9a44e7583cb542",
  measurementId: "G-1RC2YNB90Q"
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app;
