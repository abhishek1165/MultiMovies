import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_FIREBASE_MESAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
  throw new Error("Missing Firebase env vars. Set the VITE_FIREBASE_* values in Netlify and your local .env file.");
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
