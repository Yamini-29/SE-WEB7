// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import getAuth

const firebaseConfig = {
  apiKey: "AIzaSyBShXZ5H7W8LYoZGlYIA2EJRuSPKHL7iNs",
  authDomain: "airavat-5b6e1.firebaseapp.com",
  projectId: "airavat-5b6e1",
  storageBucket: "airavat-5b6e1.appspot.com",
  messagingSenderId: "132752525021",
  appId: "1:132752525021:web:47f30ed86197821a4c7d34",
  measurementId: "G-V4KYC4YVGP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize authentication

export { db, auth }; // Export auth
