
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBW5Wni_JkPUsW91Qyvor10bVoKhrTeR_0",
  authDomain: "intern-firebase-auth.firebaseapp.com",
  projectId: "intern-firebase-auth",
  storageBucket: "intern-firebase-auth.appspot.com",
  messagingSenderId: "405314351745",
  appId: "1:405314351745:web:f58500f6e5b54f5120d380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)