import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD-wybGyBWlY7IwbQPNG3Ydmxie-d7OVE",
  authDomain: "ecom-shop-3f13a.firebaseapp.com",
  projectId: "ecom-shop-3f13a",
  storageBucket: "ecom-shop-3f13a.appspot.com",
  messagingSenderId: "59504887118",
  appId: "1:59504887118:web:37c350f1fbfc06f9db4a1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
