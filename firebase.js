import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDYoI79CJ-sUy9KaECQyO39GWlkhh857-I",
  authDomain: "laundry-application-70498.firebaseapp.com",
  projectId: "laundry-application-70498",
  storageBucket: "laundry-application-70498.appspot.com",
  messagingSenderId: "779544074432",
  appId: "1:779544074432:web:7900734c238edf6e5eb525"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(); 

export {auth,db} ;