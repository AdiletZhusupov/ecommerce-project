import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDQ9Xx8HyKLxD1pN7Y77RWdUOuC7almyVQ",
  authDomain: "ecommerce-project-5966c.firebaseapp.com",
  projectId: "ecommerce-project-5966c",
  storageBucket: "ecommerce-project-5966c.appspot.com",
  messagingSenderId: "179796168225",
  appId: "1:179796168225:web:01aa0e0abc39951e019d60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;