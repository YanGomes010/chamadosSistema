
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGEliGq8AsvU1WMucmDRkhJ527ZmhxKU0",
  authDomain: "chamados-abd42.firebaseapp.com",
  projectId: "chamados-abd42",
  storageBucket: "chamados-abd42.firebasestorage.app",
  messagingSenderId: "132565181192",
  appId: "1:132565181192:web:55af238b438243926142bd",
  measurementId: "G-ZBKZF6J9Y1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {auth,db};