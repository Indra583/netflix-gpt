// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiOS1epcPdG6dNsuZPfhAacsjJ-B6SVoQ",
  authDomain: "netflixgpt-46156.firebaseapp.com",
  projectId: "netflixgpt-46156",
  storageBucket: "netflixgpt-46156.appspot.com",
  messagingSenderId: "826924641355",
  appId: "1:826924641355:web:03314e1382d8f9875271ce",
  measurementId: "G-SJRF92ZYDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();