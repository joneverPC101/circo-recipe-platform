// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0V1fNBYURm9Pc-kg2TMcUc_6Dj3oyJ_I",
  authDomain: "circo-1122.firebaseapp.com",
  databaseURL: "https://circo-1122-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "circo-1122",
  storageBucket: "circo-1122.firebasestorage.app",
  messagingSenderId: "714400700723",
  appId: "1:714400700723:web:dc43e825e420e9619ac646",
  measurementId: "G-Z6K2MTHSFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conditionally initialize analytics (client-side only)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export { analytics };
