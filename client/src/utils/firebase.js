
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "interviewiq-6b29c.firebaseapp.com",
  projectId: "interviewiq-6b29c",
  storageBucket: "interviewiq-6b29c.firebasestorage.app",
  messagingSenderId: "515244972286",
  appId: "1:515244972286:web:9772fe68c6e6e3ce4c6daf"
};


const app = initializeApp(firebaseConfig);

const auth =getAuth(app);


const provider = new GoogleAuthProvider()

export{auth, provider}