import {
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    onSnapshot,
    arrayUnion,
    arrayRemove
} from 'firebase/firestore';
import { db } from './config';
import { WordRow } from '../types/word.types';

// Коллекции
const USERS_COLLECTION = 'users';
const WORDS_COLLECTION = 'words';
const PROGRESS_COLLECTION = 'progress';

// ============================================
// РАБОТА СО СЛОВАМИ (ТЕПЕРЬ ИЗ FIRESTORE)
// ============================================

// Получить все слова из Firestore
export const getAllWordsFromFirestore = async (): Promise<WordRow[]> => {
    try {
        const wordsRef = collection(db, WORDS_COLLECTION);
        const snapshot = await getDocs(wordsRef);

        const words: WordRow[] = [];
        snapshot.forEach(doc => {
            words.push({ id: parseInt(doc.id), ...doc.data() } as WordRow);
        });

        console.log(`📚 Загружено ${words.length} слов из Firestore`);
        return words.sort((a, b) => a.id - b.id); // сортируем по ID
    } catch (error) {
        console.error('❌ Ошибка загрузки слов из Firestore:', error);
        return [];
    }
};

// Получить слова по семействам
export const getWordsByFamilies = async (families: string[]): Promise<WordRow[]> => {
    if (families.length === 0) return [];

    try {
        const wordsRef = collection(db, WORDS_COLLECTION);
        const q = query(wordsRef, where('rootFamily', 'in', families));
        const snapshot = await getDocs(q);

        const words: WordRow[] = [];
        snapshot.forEach(doc => {
            words.push({ id: parseInt(doc.id), ...doc.data() } as WordRow);
        });

        return words;
    } catch (error) {
        console.error('❌ Ошибка загрузки слов по семействам:', error);
        return [];
    }
};

// ============================================
// РАБОТА С ПОЛЬЗОВАТЕЛЯМИ И ПРОГРЕССОМ
// ============================================

// Создать/получить прогресс пользователя
export const getUserProgress = async (userId: string) => {
    const progressRef = doc(db, USERS_COLLECTION, userId, PROGRESS_COLLECTION, 'words');
    const progressSnap = await getDoc(progressRef);

    if (progressSnap.exists()) {
        return progressSnap.data();
    } else {
        // Создаем новый прогресс
        const initialProgress = {
            learned: [],
            blacklisted: [],
            selectedFamilies: [],
            settings: {
                showEnglish: true,
                showTranscription: true,
                showRussian: true,
                showSentenceEn: true,
                showSentenceRu: true,
                highlightWords: true,
                speakEnglish: false,
                speakRussian: false,
                englishSpeechRate: 0.9,
                russianSpeechRate: 0.9,
                speed: 0.5
            }
        };

        await setDoc(progressRef, initialProgress);
        return initialProgress;
    }
};

// Отметить слово как выученное
export const markWordAsLearned = async (userId: string, wordId: number, learned: boolean) => {
    const progressRef = doc(db, USERS_COLLECTION, userId, PROGRESS_COLLECTION, 'words');

    if (learned) {
        await updateDoc(progressRef, {
            learned: arrayUnion(wordId),
            blacklisted: arrayRemove(wordId)
        });
    } else {
        await updateDoc(progressRef, {
            learned: arrayRemove(wordId)
        });
    }
};

// Добавить/убрать из черного списка
export const markWordAsBlacklisted = async (userId: string, wordId: number, blacklisted: boolean) => {
    const progressRef = doc(db, USERS_COLLECTION, userId, PROGRESS_COLLECTION, 'words');

    if (blacklisted) {
        await updateDoc(progressRef, {
            blacklisted: arrayUnion(wordId),
            learned: arrayRemove(wordId)
        });
    } else {
        await updateDoc(progressRef, {
            blacklisted: arrayRemove(wordId)
        });
    }
};

// Сохранить выбранные семейства
export const saveSelectedFamilies = async (userId: string, families: string[]) => {
    const progressRef = doc(db, USERS_COLLECTION, userId, PROGRESS_COLLECTION, 'words');
    await updateDoc(progressRef, { selectedFamilies: families });
};

// Сохранить настройки пользователя
export const saveUserSettings = async (userId: string, settings: any) => {
    const progressRef = doc(db, USERS_COLLECTION, userId, PROGRESS_COLLECTION, 'words');
    await updateDoc(progressRef, { settings });
};

// Подписка на изменения прогресса в реальном времени
export const subscribeToProgress = (
    userId: string,
    callback: (progress: any) => void
) => {
    const progressRef = doc(db, USERS_COLLECTION, userId, PROGRESS_COLLECTION, 'words');
    return onSnapshot(progressRef, (doc) => {
        if (doc.exists()) {
            callback(doc.data());
        }
    });
};