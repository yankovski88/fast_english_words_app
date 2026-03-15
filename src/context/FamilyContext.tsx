import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { WordRow } from '../types/word.types';
import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    onSnapshot
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';
import { wordTable } from '../data/wordTable';

interface FamilyContextType {
    selectedFamilies: Set<string>;
    setSelectedFamilies: React.Dispatch<React.SetStateAction<Set<string>>>;
    families: string[];
    studyWords: WordRow[];
    refreshStudyWords: () => Promise<void>;
    toggleFamilySelection: (family: string) => Promise<void>;
    selectAllFamilies: () => Promise<void>;
    clearAllFamilies: () => Promise<void>;
    selectTopFamilies: (count: number) => Promise<void>;
    removeTopFamilies: (count: number) => Promise<void>;
    toggleWordLearned: (wordId: number) => Promise<void>;
    toggleWordBlacklisted: (wordId: number) => Promise<void>;
    updateSettings: (settings: any) => Promise<void>;
    loading: boolean;
    error: string | null;
}

const FamilyContext = createContext<FamilyContextType | undefined>(undefined);

export const useFamilyContext = () => {
    const context = useContext(FamilyContext);
    if (!context) {
        throw new Error('useFamilyContext must be used within FamilyProvider');
    }
    return context;
};

export const FamilyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedFamilies, setSelectedFamilies] = useState<Set<string>>(new Set());
    const [families, setFamilies] = useState<string[]>([]);
    const [studyWords, setStudyWords] = useState<WordRow[]>([]);
    const [allWords, setAllWords] = useState<WordRow[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user } = useAuth();

    // Load all words from local data (not Firebase)
    useEffect(() => {
        const loadWords = async () => {
            try {
                setLoading(true);
                const words = await wordTable.getAllWords();
                console.log('📚 Все слова загружены:', words.length);
                setAllWords(words);
                const uniqueFamilies = [...new Set(words.map(w => w.rootFamily))].sort();
                setFamilies(uniqueFamilies);
                setSelectedFamilies(new Set(uniqueFamilies));

                // Initial study words (no user)
                setStudyWords(words.filter(w => !w.learned && !w.blacklisted));
            } catch (err) {
                console.error('❌ Ошибка загрузки слов:', err);
                setError('Не удалось загрузить слова');
            } finally {
                setLoading(false);
            }
        };
        loadWords();
    }, []);

    // Load user progress from Firestore when user logs in
    useEffect(() => {
        if (!user || allWords.length === 0) return;

        console.log('👤 Загружаем прогресс для пользователя:', user.uid);
        const progressRef = doc(db, 'users', user.uid, 'progress', 'words');

        const unsubscribe = onSnapshot(
            progressRef,
            async (docSnap) => {
                try {
                    if (docSnap.exists()) {
                        const progress = docSnap.data();
                        console.log('📊 Прогресс загружен из Firestore:', progress);

                        // Update selected families
                        if (progress.selectedFamilies && progress.selectedFamilies.length > 0) {
                            setSelectedFamilies(new Set(progress.selectedFamilies));
                        }

                        // Create a map of word statuses
                        const learnedSet = new Set(progress.learned || []);
                        const blacklistedSet = new Set(progress.blacklisted || []);

                        // Update words with progress
                        const wordsWithProgress = allWords.map(word => ({
                            ...word,
                            learned: learnedSet.has(word.id),
                            blacklisted: blacklistedSet.has(word.id)
                        }));

                        // Update study words
                        const filtered = wordsWithProgress.filter(word =>
                            !word.learned &&
                            !word.blacklisted &&
                            (progress.selectedFamilies?.length > 0
                                ? progress.selectedFamilies.includes(word.rootFamily)
                                : true)
                        );

                        console.log('📚 Слов для изучения:', filtered.length);
                        setStudyWords(filtered);

                    } else {
                        // First time user - create empty progress with current families
                        console.log('🆕 Новый пользователь, создаем прогресс');

                        const currentFamilies = Array.from(selectedFamilies);

                        const initialProgress = {
                            learned: [],
                            blacklisted: [],
                            selectedFamilies: currentFamilies,
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

                        // Update study words with current families
                        const filtered = allWords.filter(word =>
                            !word.learned &&
                            !word.blacklisted &&
                            currentFamilies.includes(word.rootFamily)
                        );
                        setStudyWords(filtered);
                    }
                } catch (err) {
                    console.error('Ошибка обработки прогресса:', err);
                    setError('Ошибка загрузки прогресса');
                }
            },
            (err) => {
                console.error('Ошибка слушателя Firestore:', err);
            }
        );

        return () => unsubscribe();
    }, [user, allWords]);

    // Filter study words based on selected families (when no user)
    useEffect(() => {
        if (!allWords.length || user) return;

        const filtered = allWords.filter(word =>
            !word.learned &&
            !word.blacklisted &&
            selectedFamilies.has(word.rootFamily)
        );
        setStudyWords(filtered);
    }, [allWords, selectedFamilies, user]);

    // Refresh study words
    const refreshStudyWords = useCallback(async () => {
        if (!allWords.length) return;

        const filtered = allWords.filter(word =>
            !word.learned &&
            !word.blacklisted &&
            selectedFamilies.has(word.rootFamily)
        );
        setStudyWords(filtered);
    }, [allWords, selectedFamilies]);

    // Toggle family selection
    const toggleFamilySelection = async (family: string) => {
        if (!user) {
            // Local mode - just update state
            const newSet = new Set(selectedFamilies);
            if (newSet.has(family)) {
                newSet.delete(family);
            } else {
                newSet.add(family);
            }
            setSelectedFamilies(newSet);
            return;
        }

        const newSet = new Set(selectedFamilies);
        if (newSet.has(family)) {
            newSet.delete(family);
        } else {
            newSet.add(family);
        }

        setSelectedFamilies(newSet);

        try {
            const progressRef = doc(db, 'users', user.uid, 'progress', 'words');
            await updateDoc(progressRef, {
                selectedFamilies: Array.from(newSet)
            });
        } catch (err) {
            console.error('Ошибка сохранения семейств:', err);
        }
    };

    // Select all families
    const selectAllFamilies = async () => {
        const newSet = new Set(families);
        setSelectedFamilies(newSet);

        if (user) {
            try {
                const progressRef = doc(db, 'users', user.uid, 'progress', 'words');
                await updateDoc(progressRef, {
                    selectedFamilies: Array.from(newSet)
                });
            } catch (err) {
                console.error('Ошибка сохранения семейств:', err);
            }
        }
    };

    // Clear all families
    const clearAllFamilies = async () => {
        setSelectedFamilies(new Set());

        if (user) {
            try {
                const progressRef = doc(db, 'users', user.uid, 'progress', 'words');
                await updateDoc(progressRef, {
                    selectedFamilies: []
                });
            } catch (err) {
                console.error('Ошибка сохранения семейств:', err);
            }
        }
    };

    // Select top N families
    const selectTopFamilies = async (count: number) => {
        const topFamilies = families.slice(0, Math.min(count, families.length));
        setSelectedFamilies(new Set(topFamilies));

        if (user) {
            try {
                const progressRef = doc(db, 'users', user.uid, 'progress', 'words');
                await updateDoc(progressRef, {
                    selectedFamilies: topFamilies
                });
            } catch (err) {
                console.error('Ошибка сохранения семейств:', err);
            }
        }
    };

    // Remove top N families
    const removeTopFamilies = async (count: number) => {
        const familiesToRemove = families.slice(0, Math.min(count, families.length));
        const newSet = new Set(selectedFamilies);
        familiesToRemove.forEach(family => newSet.delete(family));
        setSelectedFamilies(newSet);

        if (user) {
            try {
                const progressRef = doc(db, 'users', user.uid, 'progress', 'words');
                await updateDoc(progressRef, {
                    selectedFamilies: Array.from(newSet)
                });
            } catch (err) {
                console.error('Ошибка сохранения семейств:', err);
            }
        }
    };

    // Toggle word learned status
    const toggleWordLearned = async (wordId: number) => {
        if (!user) return;

        const word = allWords.find(w => w.id === wordId);
        if (!word) return;

        const newLearned = !word.learned;

        try {
            const progressRef = doc(db, 'users', user.uid, 'progress', 'words');
            if (newLearned) {
                await updateDoc(progressRef, {
                    learned: arrayUnion(wordId),
                    blacklisted: arrayRemove(wordId)
                });
            } else {
                await updateDoc(progressRef, {
                    learned: arrayRemove(wordId)
                });
            }
        } catch (err) {
            console.error('Ошибка сохранения статуса:', err);
        }
    };

    // Toggle word blacklist status
    const toggleWordBlacklisted = async (wordId: number) => {
        if (!user) return;

        const word = allWords.find(w => w.id === wordId);
        if (!word) return;

        const newBlacklisted = !word.blacklisted;

        try {
            const progressRef = doc(db, 'users', user.uid, 'progress', 'words');
            if (newBlacklisted) {
                await updateDoc(progressRef, {
                    blacklisted: arrayUnion(wordId),
                    learned: arrayRemove(wordId)
                });
            } else {
                await updateDoc(progressRef, {
                    blacklisted: arrayRemove(wordId)
                });
            }
        } catch (err) {
            console.error('Ошибка сохранения статуса:', err);
        }
    };

    // Update settings
    const updateSettings = async (settings: any) => {
        if (!user) return;

        try {
            const progressRef = doc(db, 'users', user.uid, 'progress', 'words');
            await updateDoc(progressRef, { settings });
        } catch (err) {
            console.error('Ошибка сохранения настроек:', err);
        }
    };

    if (loading && allWords.length === 0) {
        return <div className="loading-spinner">Загрузка данных...</div>;
    }

    return (
        <FamilyContext.Provider value={{
            selectedFamilies,
            setSelectedFamilies,
            families,
            studyWords,
            refreshStudyWords,
            toggleFamilySelection,
            selectAllFamilies,
            clearAllFamilies,
            selectTopFamilies,
            removeTopFamilies,
            toggleWordLearned,
            toggleWordBlacklisted,
            updateSettings,
            loading,
            error
        }}>
            {children}
        </FamilyContext.Provider>
    );
};