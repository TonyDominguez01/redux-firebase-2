import { initializeApp } from "firebase/app";
import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS2i9Ser7WYZEMNpodoLn340OC9VDIKUc",
  authDomain: "reduxyfirebase-ed681.firebaseapp.com",
  projectId: "reduxyfirebase-ed681",
  storageBucket: "reduxyfirebase-ed681.appspot.com",
  messagingSenderId: "594384326095",
  appId: "1:594384326095:web:e79e84d7b1e709e9d5d6ba",
  measurementId: "G-NHM8H1ZZXP"
};

// Initialize Firebase
const firebaseAPP = firebase.initializeApp(firebaseConfig);

const db = firebaseAPP.firestore();
const auth = firebase.auth();

export {db, auth}