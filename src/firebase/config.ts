import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClGHGZQqOd4Fpr1z3C5STX7M5jDZNpHoY",
    authDomain: "fast-english-words-app.firebaseapp.com",
    projectId: "fast-english-words-app",
    storageBucket: "fast-english-words-app.firebasestorage.app",
    messagingSenderId: "715056664975",
    appId: "1:715056664975:web:3c15336c4728838117bbfa",
    measurementId: "G-F7RXGN6R86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with persistent cache for offline support
// This enables offline data persistence across browser sessions
const db = initializeFirestore(app, {
    localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager() // Allows multiple tabs to share cache
    })
});

// Export services
export const auth = getAuth(app);
export { db };
export default app;