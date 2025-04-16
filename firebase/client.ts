// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCanrxcnZuZ_eKVqcU-jyaCB_o7q_oqDzg",
    authDomain: "prepwise-d3a19.firebaseapp.com",
    projectId: "prepwise-d3a19",
    storageBucket: "prepwise-d3a19.firebasestorage.app",
    messagingSenderId: "647011954089",
    appId: "1:647011954089:web:07930595feadc52aafa8b8",
    measurementId: "G-6M8JX6SWQQ"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);