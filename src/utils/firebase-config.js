
import { initializeApp } from "firebase/app";

import{getAuth} from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiossRi5rvGqeRdVREPjFfmVmQwmgKINo",
  authDomain: "react--clone-61781.firebaseapp.com",
  projectId: "react--clone-61781",
  storageBucket: "react--clone-61781.appspot.com",
  messagingSenderId: "466188849922",
  appId: "1:466188849922:web:a984696e8a13589e11681b",
  measurementId: "G-04KPLMDHDP"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);