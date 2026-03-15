import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    User
} from 'firebase/auth';
import { auth } from './config';

// Регистрация по email/пароль
export const registerWithEmail = async (email: string, password: string) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, user: result.user };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
};

// Вход по email/пароль
export const loginWithEmail = async (email: string, password: string) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: result.user };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
};

// Вход через Google
export const loginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return { success: true, user: result.user };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
};

// Выход
export const logoutUser = async () => {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
};

// Слушатель состояния авторизации
export const onAuthStateChange = (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, callback);
};