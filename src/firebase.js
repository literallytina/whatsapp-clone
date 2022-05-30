import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp0w45PsNpgzUcTH00GpuOEiwtSOA6fBU",
  authDomain: "whats-app-clone-9097b.firebaseapp.com",
  projectId: "whats-app-clone-9097b",
  storageBucket: "whats-app-clone-9097b.appspot.com",
  messagingSenderId: "393787648470",
  appId: "1:393787648470:web:572de2f4b3ecfa2a4ddc77",
  measurementId: "G-JXR72CVYHF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
