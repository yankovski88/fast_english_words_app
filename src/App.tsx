import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import WordTable from './components/WordTable';
import { FamilyProvider, useFamilyContext } from './context/FamilyContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthModal from './components/AuthModal';
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
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

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

    // Используем контексты
    const { user, logout } = useAuth();
    const { studyWords, refreshStudyWords, toggleWordLearned } = useFamilyContext();

    // Обновляем currentIndex при изменении списка слов с защитой
    useEffect(() => {
        console.log('📚 studyWords изменился, длина:', studyWords.length);
        if (studyWords.length > 0) {
            // Проверяем, что currentIndex не выходит за пределы
            setCurrentIndex(prev => {
                if (prev >= studyWords.length) {
                    return 0;
                }
                return prev;
            });
        }
        setIsInitialized(true);
    }, [studyWords]);

    // Загрузка голосов
    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            console.log('🎤 Доступные голоса:', availableVoices.length);
            if (availableVoices.length > 0) {
                const englishVoice = availableVoices.find(v => v.lang.includes('en'));
                const russianVoice = availableVoices.find(v => v.lang.includes('ru'));
                voicesRef.current = {
                    english: englishVoice || availableVoices[0],
                    russian: russianVoice || availableVoices[0]
                };
                console.log('🎤 Английский голос:', voicesRef.current.english?.name);
                console.log('🎤 Русский голос:', voicesRef.current.russian?.name);
            }
        };
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
        return () => window.speechSynthesis.cancel();
    }, []);

    // Функция озвучивания
    const speak = useCallback((text: string, lang: 'en' | 'ru') => {
        return new Promise((resolve) => {
            console.log(`🔊 Озвучиваем: "${text}" (${lang})`);

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang === 'en' ? 'en-US' : 'ru-RU';
            utterance.rate = lang === 'en' ? englishSpeechRate : russianSpeechRate;

            if (lang === 'en' && voicesRef.current.english) {
                utterance.voice = voicesRef.current.english;
            } else if (lang === 'ru' && voicesRef.current.russian) {
                utterance.voice = voicesRef.current.russian;
            }

            utterance.onstart = () => {
                console.log('▶️ Речь началась');
                setIsSpeaking(true);
            };
            utterance.onend = () => {
                console.log('⏹️ Речь закончилась');
                setIsSpeaking(false);
                resolve(true);
            };
            utterance.onerror = (e) => {
                console.error('❌ Ошибка речи:', e);
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
        if (isProcessingRef.current || studyWords.length === 0 || !studyWords[currentIndex]) return;

        console.log('🔊 Озвучиваем слово индекс:', currentIndex);
        isProcessingRef.current = true;
        const word = studyWords[currentIndex];

        try {
            if (speakEnglish) {
                await speak(word.word, 'en');
            }
            if (speakRussian) {
                await new Promise(r => setTimeout(r, 300));
                await speak(word.translation, 'ru');
            }
        } catch (error) {
            console.error('Ошибка озвучивания:', error);
        } finally {
            isProcessingRef.current = false;
        }
    }, [currentIndex, studyWords, speakEnglish, speakRussian, speak]);

    // Ручное озвучивание английского слова
    const speakEnglishManually = useCallback(() => {
        if (studyWords.length === 0 || !studyWords[currentIndex]) return;
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
        console.log('➡️ Переход к следующему слову');
    }, [isPlaying, studyWords.length]);

    const goToPrevWord = useCallback(() => {
        if (studyWords.length === 0) return;
        if (isPlaying) setIsPlaying(false);
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        isProcessingRef.current = false;
        setCurrentIndex(prev => (prev - 1 + studyWords.length) % studyWords.length);
        console.log('⬅️ Переход к предыдущему слову');
    }, [isPlaying, studyWords.length]);

    // Отметить слово как выученное
    const handleToggleLearned = useCallback(() => {
        if (studyWords.length === 0 || !studyWords[currentIndex]) return;
        const word = studyWords[currentIndex];
        toggleWordLearned(word.id);
    }, [currentIndex, studyWords, toggleWordLearned]);

    // ⭐ САМОЕ ВАЖНОЕ: Автопоказ
    useEffect(() => {
        // Очищаем предыдущий таймер
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        // Если не играем или нет слов — выходим
        if (!isPlaying || studyWords.length === 0) {
            console.log('⏸️ Автопоказ остановлен');
            return;
        }

        console.log('▶️ Автопоказ запущен, скорость:', speed, 'сек');

        const runAutoPlay = async () => {
            // Озвучиваем текущее слово
            await speakCurrentWord();

            // Если всё ещё играем — ставим таймер на следующее слово
            if (isPlaying && studyWords.length > 0) {
                timerRef.current = setTimeout(() => {
                    console.log('⏱️ Таймер сработал, переходим к следующему слову');
                    setCurrentIndex(prev => (prev + 1) % studyWords.length);
                }, speed * 1000);
            }
        };

        runAutoPlay();

        // Очистка при размонтировании или остановке
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isPlaying, currentIndex, speed, studyWords.length, speakCurrentWord]);

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

            <div className="auth-buttons">
                {user ? (
                    <>
                        <span className="user-email">{user.email}</span>
                        <button onClick={logout} className="btn-logout">🚪 Выйти</button>
                    </>
                ) : (
                    <button onClick={() => setShowAuthModal(true)} className="btn-login">
                        🔐 Войти / Регистрация
                    </button>
                )}
            </div>

            <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

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
                    {currentWord ? (
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
                    ) : (
                        <div className="word-card">
                            <div className="placeholder-message">
                                ⏳ Загрузка слова...
                            </div>
                        </div>
                    )}

                    <div className="counter">
                        {currentIndex + 1} / {studyWords.length}
                    </div>

                    <NavigationControls
                        goToPrevWord={goToPrevWord}
                        goToNextWord={goToNextWord}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        toggleLearned={handleToggleLearned}
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

function App() {
    return (
        <AuthProvider>
            <FamilyProvider>
                <AppContent />
            </FamilyProvider>
        </AuthProvider>
    );
}

export default App;