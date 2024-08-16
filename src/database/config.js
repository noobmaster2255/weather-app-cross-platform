import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8uGRcElN6Ruj3ll6ZLojUL7mbJpJUJfQ",
  authDomain: "pwa-weatherapp-project.firebaseapp.com",
  projectId: "pwa-weatherapp-project",
  storageBucket: "pwa-weatherapp-project.appspot.com",
  messagingSenderId: "139179265598",
  appId: "1:139179265598:web:07f2e2fd57357b0e704b6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});