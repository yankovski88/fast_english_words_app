import React, { createContext, useState, useContext, useEffect } from 'react';
import { WordRow } from '../types/word.types';
import { wordTable } from '../data/wordTable';

interface FamilyContextType {
    selectedFamilies: Set<string>;
    setSelectedFamilies: React.Dispatch<React.SetStateAction<Set<string>>>;
    families: string[];
    studyWords: WordRow[];
    refreshStudyWords: () => void;
    toggleFamilySelection: (family: string) => void;
    selectAllFamilies: () => void;
    clearAllFamilies: () => void;
    selectTopFamilies: (count: number) => void;
    removeTopFamilies: (count: number) => void;
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
    const [allWords, setAllWords] = useState<WordRow[]>([]);
    const [families, setFamilies] = useState<string[]>([]);

    // Загружаем все слова и определяем семейства
    useEffect(() => {
        const words = wordTable.getAllWords();
        setAllWords(words);
        const uniqueFamilies = [...new Set(words.map(w => w.rootFamily))].sort();
        setFamilies(uniqueFamilies);
        // По умолчанию выбираем все семейства
        setSelectedFamilies(new Set(uniqueFamilies));
    }, []);

    // Получаем слова для изучения на основе выбранных семейств
    const getStudyWords = (): WordRow[] => {
        const allStudyWords = wordTable.getStudyWords();
        if (selectedFamilies.size === 0) return [];
        return allStudyWords.filter(word => selectedFamilies.has(word.rootFamily));
    };

    const refreshStudyWords = () => {
        // Обновляем список всех слов
        const words = wordTable.getAllWords();
        setAllWords(words);
    };

    const toggleFamilySelection = (family: string) => {
        setSelectedFamilies(prev => {
            const newSet = new Set(prev);
            if (newSet.has(family)) {
                newSet.delete(family);
            } else {
                newSet.add(family);
            }
            return newSet;
        });
    };

    const selectAllFamilies = () => {
        setSelectedFamilies(new Set(families));
    };

    const clearAllFamilies = () => {
        setSelectedFamilies(new Set());
    };

    const selectTopFamilies = (count: number) => {
        const topFamilies = families.slice(0, Math.min(count, families.length));
        setSelectedFamilies(new Set(topFamilies));
    };

    const removeTopFamilies = (count: number) => {
        const familiesToRemove = families.slice(0, Math.min(count, families.length));
        setSelectedFamilies(prev => {
            const newSet = new Set(prev);
            familiesToRemove.forEach(family => newSet.delete(family));
            return newSet;
        });
    };

    const studyWords = getStudyWords();

    const value = {
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
    };

    return <FamilyContext.Provider value={value}>{children}</FamilyContext.Provider>;
};