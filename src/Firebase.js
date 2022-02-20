import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6qQJ0SK9iLmTmGSvuCVYOYJz4LajX-XA",
  authDomain: "facebook-clone-1eb7d.firebaseapp.com",
  projectId: "facebook-clone-1eb7d",
  storageBucket: "facebook-clone-1eb7d.appspot.com",
  messagingSenderId: "49425430417",
  appId: "1:49425430417:web:41d8e82961a7616518cc30",
  measurementId: "G-JFKKE7M50Y",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const timestamp = serverTimestamp();
const provider = new GoogleAuthProvider();

export { app, db, storage, auth, timestamp, provider };
