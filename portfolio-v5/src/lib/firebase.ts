// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAAQxV5gj6wiMrwSoLvOKez0deJ1WHOJgE",
//   authDomain: "portfolio-v5-46c20.firebaseapp.com",
//   projectId: "portfolio-v5-46c20",
//   storageBucket: "portfolio-v5-46c20.firebasestorage.app",
//   messagingSenderId: "164163651919",
//   appId: "1:164163651919:web:431e34942a5a44c1d65d3a",
//   measurementId: "G-M60S4LN0NK"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);