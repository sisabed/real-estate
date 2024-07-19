// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-2beff.firebaseapp.com",
  projectId: "real-estate-2beff",
  storageBucket: "real-estate-2beff.appspot.com",
  messagingSenderId: "1089943270276",
  appId: "1:1089943270276:web:15617c3fb3e6b29254a3d1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
