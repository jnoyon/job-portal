// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHLaF9PuE3Ez2bAd7CZIjUKDtvHVi91YQ",
  authDomain: "job-portal-e28f8.firebaseapp.com",
  projectId: "job-portal-e28f8",
  storageBucket: "job-portal-e28f8.firebasestorage.app",
  messagingSenderId: "355153223764",
  appId: "1:355153223764:web:b21e8e86cfcf70b4858dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
