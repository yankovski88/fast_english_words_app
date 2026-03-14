import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import { wordTable } from './data/wordTable';
import WordTable from './components/WordTable';
import { WordRow } from './types/word.types';
import { FamilyProvider, useFamilyContext } from './context/FamilyContext';
import WordCard from './components/WordCard';
import NavigationControls from './components/NavigationControls';
import DisplaySettings from './components/DisplaySettings';
import VoiceSettings from './components/VoiceSettings';
import SpeedSettings from './components/SpeedSettings';

// Глобальная функция для озвучки из таблицы
declare global {
    interface Window {
        speakWord?: (text: string, lang: 'en' | 'ru') => void;
    }
}

// Внутренний компонент, который использует контекст
const AppContent: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showWordTable, setShowWordTable] = useState(false);

    // Состояния для отображения
    const [showEnglish, setShowEnglish] = useState(true);
    const [showTranscription, setShowTranscription] = useState(true);
    const [showRussian, setShowRussian] = useState(true);
    const [showSentenceEn, setShowSentenceEn] = useState(true);
    const [showSentenceRu, setShowSentenceRu] = useState(true);
    const [highlightWords, setHighlightWords] = useState(true);

    // Состояния для сворачивания блоков настроек
    const [showDisplaySettings, setShowDisplaySettings] = useState(true);
    const [showVoiceSettings, setShowVoiceSettings] = useState(true);
    const [showSpeedSettings, setShowSpeedSettings] = useState(true);

    // Состояния для озвучки
    const [speakEnglish, setSpeakEnglish] = useState(false);
    const [speakRussian, setSpeakRussian] = useState(false);

    // Скорость показа
    const [speed, setSpeed] = useState(0.5);
    const [userSpeed, setUserSpeed] = useState(0.5);

    // Скорость речи
    const [englishSpeechRate, setEnglishSpeechRate] = useState(0.9);
    const [russianSpeechRate, setRussianSpeechRate] = useState(0.9);

    const [isSpeaking, setIsSpeaking] = useState(false);

    // Refs
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const voicesRef = useRef<{ english: SpeechSynthesisVoice | null; russian: SpeechSynthesisVoice | null }>({
        english: null,
        russian: null
    });
    const isMountedRef = useRef(true);
    const isProcessingRef = useRef(false);
    const wasAnyVoiceEnabled = useRef(false);

    // Используем контекст семейств
    const { studyWords, refreshStudyWords } = useFamilyContext();

    // Обновляем currentIndex при изменении списка слов
    useEffect(() => {
        setCurrentIndex(0);
    }, [studyWords]);

    // Загрузка голосов
    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            if (availableVoices.length > 0) {
                const englishVoice = availableVoices.find(v => v.lang.includes('en'));
                const russianVoice = availableVoices.find(v => v.lang.includes('ru'));
                voicesRef.current = {
                    english: englishVoice || availableVoices[0],
                    russian: russianVoice || availableVoices[0]
                };
            }
        };
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
        return () => window.speechSynthesis.cancel();
    }, []);

    // Функция озвучивания
    const speak = useCallback((text: string, lang: 'en' | 'ru') => {
        return new Promise((resolve) => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang === 'en' ? 'en-US' : 'ru-RU';
            utterance.rate = lang === 'en' ? englishSpeechRate : russianSpeechRate;

            if (lang === 'en' && voicesRef.current.english) {
                utterance.voice = voicesRef.current.english;
            } else if (lang === 'ru' && voicesRef.current.russian) {
                utterance.voice = voicesRef.current.russian;
            }

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => {
                setIsSpeaking(false);
                resolve(true);
            };
            utterance.onerror = () => {
                setIsSpeaking(false);
                resolve(false);
            };

            window.speechSynthesis.speak(utterance);
        });
    }, [englishSpeechRate, russianSpeechRate]);

    // Делаем функцию озвучки глобальной
    useEffect(() => {
        window.speakWord = speak;
        return () => { delete window.speakWord; };
    }, [speak]);

    // Озвучивание текущего слова
    const speakCurrentWord = useCallback(async () => {
        if (isProcessingRef.current || studyWords.length === 0) return;
        isProcessingRef.current = true;
        const word = studyWords[currentIndex];

        try {
            if (speakEnglish) await speak(word.word, 'en');
            if (speakRussian) {
                await new Promise(r => setTimeout(r, 300));
                await speak(word.translation, 'ru');
            }
        } finally {
            isProcessingRef.current = false;
        }
    }, [currentIndex, studyWords, speakEnglish, speakRussian, speak]);

    // Ручное озвучивание английского слова
    const speakEnglishManually = useCallback(() => {
        if (studyWords.length === 0) return;
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        isProcessingRef.current = false;
        setTimeout(() => speak(studyWords[currentIndex].word, 'en'), 100);
    }, [currentIndex, studyWords, speak]);

    // Автоматическая скорость при включении озвучки
    useEffect(() => {
        const anyVoiceEnabled = speakEnglish || speakRussian;
        if (anyVoiceEnabled) {
            if (!wasAnyVoiceEnabled.current) setSpeed(0.05);
            wasAnyVoiceEnabled.current = true;
        } else {
            if (wasAnyVoiceEnabled.current) setSpeed(userSpeed);
            wasAnyVoiceEnabled.current = false;
        }
    }, [speakEnglish, speakRussian, userSpeed]);

    // Навигация
    const goToNextWord = useCallback(() => {
        if (studyWords.length === 0) return;
        if (isPlaying) setIsPlaying(false);
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        isProcessingRef.current = false;
        setCurrentIndex(prev => (prev + 1) % studyWords.length);
    }, [isPlaying, studyWords.length]);

    const goToPrevWord = useCallback(() => {
        if (studyWords.length === 0) return;
        if (isPlaying) setIsPlaying(false);
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        isProcessingRef.current = false;
        setCurrentIndex(prev => (prev - 1 + studyWords.length) % studyWords.length);
    }, [isPlaying, studyWords.length]);

    // Отметить слово как выученное
    const toggleLearned = useCallback(() => {
        if (studyWords.length === 0) return;
        const word = studyWords[currentIndex];
        wordTable.toggleWordLearned(word.id);
        refreshStudyWords(); // Обновляем список после изменения
    }, [currentIndex, studyWords, refreshStudyWords]);

    // Автопоказ
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (!isPlaying || studyWords.length === 0) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            isProcessingRef.current = false;
            return;
        }

        let isActive = true;
        const showWord = async () => {
            if (!isActive || !isPlaying) return;
            await speakCurrentWord();
            if (!isActive || !isPlaying) return;
            timerRef.current = setTimeout(() => {
                if (isActive && isPlaying) {
                    setCurrentIndex(prev => (prev + 1) % studyWords.length);
                }
            }, speed * 1000);
        };
        showWord();
        return () => { isActive = false; };
    }, [currentIndex, isPlaying, speed, speakCurrentWord, studyWords.length]);

    // Выделение слова в предложении
    const highlightWordInSentence = (sentence: string, word: string, lang: 'en' | 'ru' = 'en') => {
        if (!highlightWords || !sentence || !word) return sentence;
        const regex = new RegExp(`(${word})`, 'gi');
        return sentence.split(regex).map((part, i) =>
            part.toLowerCase() === word.toLowerCase()
                ? <mark key={i} className={`highlight highlight-${lang}`}>{part}</mark>
                : part
        );
    };

    const currentWord = studyWords[currentIndex];

    return (
        <div className="app">
            <h1>🇬🇧 Учим английские слова 🇷🇺</h1>

            <div className="table-toggle-container">
                <button
                    onClick={() => setShowWordTable(!showWordTable)}
                    className="btn-table-toggle"
                >
                    {showWordTable ? '📋 Скрыть таблицу слов' : '📊 Показать таблицу слов'}
                </button>
            </div>

            {showWordTable && <WordTable />}

            {studyWords.length === 0 && !showWordTable ? (
                <div className="no-words-message">
                    <p>📭 Нет слов для изучения</p>
                    <p>Откройте таблицу и выберите семейства для изучения</p>
                </div>
            ) : studyWords.length > 0 && !showWordTable ? (
                <>
                    <WordCard
                        currentWord={currentWord}
                        showEnglish={showEnglish}
                        showTranscription={showTranscription}
                        showRussian={showRussian}
                        showSentenceEn={showSentenceEn}
                        showSentenceRu={showSentenceRu}
                        highlightWords={highlightWords}
                        isSpeaking={isSpeaking}
                        speakEnglish={speakEnglish}
                        speakRussian={speakRussian}
                        speakEnglishManually={speakEnglishManually}
                        highlightWordInSentence={highlightWordInSentence}
                    />

                    <div className="counter">
                        {currentIndex + 1} / {studyWords.length}
                    </div>

                    <NavigationControls
                        goToPrevWord={goToPrevWord}
                        goToNextWord={goToNextWord}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        toggleLearned={toggleLearned}
                        currentWordLearned={currentWord?.learned}
                    />

                    <DisplaySettings
                        showEnglish={showEnglish}
                        setShowEnglish={setShowEnglish}
                        showTranscription={showTranscription}
                        setShowTranscription={setShowTranscription}
                        showRussian={showRussian}
                        setShowRussian={setShowRussian}
                        showSentenceEn={showSentenceEn}
                        setShowSentenceEn={setShowSentenceEn}
                        showSentenceRu={showSentenceRu}
                        setShowSentenceRu={setShowSentenceRu}
                        highlightWords={highlightWords}
                        setHighlightWords={setHighlightWords}
                        showDisplaySettings={showDisplaySettings}
                        setShowDisplaySettings={setShowDisplaySettings}
                    />

                    <VoiceSettings
                        speakEnglish={speakEnglish}
                        setSpeakEnglish={setSpeakEnglish}
                        speakRussian={speakRussian}
                        setSpeakRussian={setSpeakRussian}
                        englishSpeechRate={englishSpeechRate}
                        setEnglishSpeechRate={setEnglishSpeechRate}
                        russianSpeechRate={russianSpeechRate}
                        setRussianSpeechRate={setRussianSpeechRate}
                        showVoiceSettings={showVoiceSettings}
                        setShowVoiceSettings={setShowVoiceSettings}
                    />

                    <SpeedSettings
                        speed={speed}
                        setSpeed={setSpeed}
                        setUserSpeed={setUserSpeed}
                        speakEnglish={speakEnglish}
                        speakRussian={speakRussian}
                        showSpeedSettings={showSpeedSettings}
                        setShowSpeedSettings={setShowSpeedSettings}
                    />
                </>
            ) : null}
        </div>
    );
};

// Главный компонент с провайдером
function App() {
    return (
        <FamilyProvider>
            <AppContent />
        </FamilyProvider>
    );
}

export default App;