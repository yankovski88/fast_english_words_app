import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import { wordTable } from './data/wordTable';
import WordTable from './components/WordTable';
import { WordRow } from './types/word.types';

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [studyWords, setStudyWords] = useState<WordRow[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showWordTable, setShowWordTable] = useState(false);

    // Состояния для отображения
    const [showEnglish, setShowEnglish] = useState(true);
    const [showTranscription, setShowTranscription] = useState(true);
    const [showRussian, setShowRussian] = useState(true);
    const [showSentenceEn, setShowSentenceEn] = useState(true);
    const [showSentenceRu, setShowSentenceRu] = useState(true);
    const [highlightWords, setHighlightWords] = useState(true);

    // Состояния для сворачивания блоков
    const [showDisplaySettings, setShowDisplaySettings] = useState(true);
    const [showVoiceSettings, setShowVoiceSettings] = useState(true);
    const [showSpeedSettings, setShowSpeedSettings] = useState(true);

    // Состояния для озвучки - ПО УМОЛЧАНИЮ FALSE
    const [speakEnglish, setSpeakEnglish] = useState(false);
    const [speakRussian, setSpeakRussian] = useState(false);

    // Скорость показа
    const [speed, setSpeed] = useState(0.5); // По умолчанию 0.5
    const [userSpeed, setUserSpeed] = useState(0.5); // Запоминаем установленную пользователем скорость

    // Скорость речи
    const [englishSpeechRate, setEnglishSpeechRate] = useState(0.9);
    const [russianSpeechRate, setRussianSpeechRate] = useState(0.9); // Теперь до 5

    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voicesLoaded, setVoicesLoaded] = useState(false);

    // Refs
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const voicesRef = useRef<{ english: SpeechSynthesisVoice | null; russian: SpeechSynthesisVoice | null }>({
        english: null,
        russian: null
    });
    const isMountedRef = useRef(true);
    const isProcessingRef = useRef(false);
    const wasAnyVoiceEnabled = useRef(false); // Флаг для отслеживания первого включения

    // Эффект для управления скоростью при включении/выключении озвучки
    useEffect(() => {
        const anyVoiceEnabled = speakEnglish || speakRussian;

        if (anyVoiceEnabled) {
            // Если озвучка только что включилась (была false, стала true)
            if (!wasAnyVoiceEnabled.current) {
                console.log('🔊 Озвучка включена - ставим скорость на минимум');
                setSpeed(0.05); // Минимальная скорость
            }
            wasAnyVoiceEnabled.current = true;
        } else {
            // Если озвучка только что выключилась (была true, стала false)
            if (wasAnyVoiceEnabled.current) {
                console.log('🔇 Озвучка выключена - возвращаем скорость:', userSpeed);
                setSpeed(userSpeed); // Возвращаем пользовательскую скорость
            }
            wasAnyVoiceEnabled.current = false;
        }
    }, [speakEnglish, speakRussian]);

    // Загрузка слов при монтировании
    useEffect(() => {
        loadStudyWords();

        return () => {
            isMountedRef.current = false;
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    // Загрузка слов для изучения
    const loadStudyWords = () => {
        const words = wordTable.getStudyWords();
        setStudyWords(words);
        setCurrentIndex(0);
    };

    // Загрузка голосов
    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();

            if (availableVoices.length > 0) {
                const englishVoice = availableVoices.find(v =>
                    v.lang.includes('en-US') || v.lang.includes('en-GB') || v.lang.includes('en')
                );

                const russianVoice = availableVoices.find(v =>
                    v.lang.includes('ru-RU') || v.lang.includes('ru')
                );

                voicesRef.current = {
                    english: englishVoice || availableVoices[0],
                    russian: russianVoice || availableVoices[0]
                };
                setVoicesLoaded(true);
            }
        };

        loadVoices();

        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }

        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    // Функция озвучивания
    const speak = useCallback((text: string, lang: 'en' | 'ru') => {
        return new Promise((resolve) => {
            const utterance = new SpeechSynthesisUtterance(text);

            utterance.lang = lang === 'en' ? 'en-US' : 'ru-RU';
            utterance.rate = lang === 'en' ? englishSpeechRate : russianSpeechRate;
            utterance.pitch = 1;
            utterance.volume = 1;

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

    // Озвучивание текущего слова
    const speakCurrentWord = useCallback(async () => {
        if (isProcessingRef.current || studyWords.length === 0) return;

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
        } finally {
            isProcessingRef.current = false;
        }
    }, [currentIndex, studyWords, speakEnglish, speakRussian, speak]);

    // Ручное озвучивание
    const speakManually = useCallback(() => {
        if (studyWords.length === 0) return;

        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        isProcessingRef.current = false;

        setTimeout(() => {
            speakCurrentWord();
        }, 100);
    }, [speakCurrentWord, studyWords.length]);

    // Отметить слово как выученное
    const toggleLearned = useCallback(() => {
        if (studyWords.length === 0) return;

        const word = studyWords[currentIndex];
        wordTable.toggleWordLearned(word.id);
        loadStudyWords();
    }, [currentIndex, studyWords]);

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

    // Эффект для автопоказа
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

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

        return () => {
            isActive = false;
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [currentIndex, isPlaying, speed, speakCurrentWord, studyWords.length]);

    // Выделение слова в предложении
    const highlightWordInSentence = (sentence: string, word: string, lang: 'en' | 'ru' = 'en') => {
        if (!highlightWords || !sentence || !word) return sentence;

        const regex = new RegExp(`(${word})`, 'gi');

        return sentence.split(regex).map((part, i) => {
            if (part.toLowerCase() === word.toLowerCase()) {
                return <mark key={i} className={`highlight highlight-${lang}`}>{part}</mark>;
            }
            return part;
        });
    };

    const currentWord = studyWords[currentIndex];

    return (
        <div className="app">
            <h1>🇬🇧 Учим английские слова 🇷🇺</h1>

            {/* Кнопка показа таблицы */}
            <div className="table-toggle-container">
                <button
                    onClick={() => setShowWordTable(!showWordTable)}
                    className="btn-table-toggle"
                >
                    {showWordTable ? '📋 Скрыть таблицу слов' : '📊 Показать таблицу слов'}
                </button>
            </div>

            {/* Таблица слов */}
            {showWordTable && <WordTable />}

            {/* Если нет слов для изучения */}
            {studyWords.length === 0 && !showWordTable ? (
                <div className="no-words-message">
                    <p>📭 Нет слов для изучения</p>
                    <p>Откройте таблицу и добавьте слова</p>
                </div>
            ) : studyWords.length > 0 && !showWordTable ? (
                <>
                    {/* Карточка со словами */}
                    <div className="word-card">
                        {!showEnglish && !showTranscription && !showRussian &&
                        !showSentenceEn && !showSentenceRu ? (
                            <div className="placeholder-message">
                                👆 Включите показ слов
                            </div>
                        ) : (
                            <>
                                {showSentenceEn && (
                                    <div className="sentence-english">
                                        {highlightWordInSentence(currentWord.example, currentWord.word, 'en')}
                                    </div>
                                )}

                                {showSentenceRu && (
                                    <div className="sentence-russian">
                                        {highlightWordInSentence(currentWord.exampleTranslation, currentWord.translation, 'ru')}
                                    </div>
                                )}

                                {/* Английское слово с кнопкой озвучки */}
                                <div className="word-with-speak">
                                    {showEnglish && (
                                        <>
                                            <button onClick={speakManually} className="speak-word-btn" title="Озвучить слово">
                                                🔊
                                            </button>
                                            <div className="english-word">{currentWord.word}</div>
                                        </>
                                    )}
                                </div>

                                {showTranscription && (
                                    <div className="transcription-container">
                                        <span className="transcription-text">{currentWord.transcription}</span>
                                    </div>
                                )}

                                {showRussian && (
                                    <div className="russian-word-container">
                                        <div className="russian-word">{currentWord.translation}</div>
                                    </div>
                                )}
                            </>
                        )}

                        {/* Индикатор озвучки */}
                        {isSpeaking && (speakEnglish || speakRussian) && (
                            <div className="speaking-badge">🔊</div>
                        )}
                    </div>

                    {/* Счетчик прогресса */}
                    <div className="counter">
                        {currentIndex + 1} / {studyWords.length}
                    </div>

                    {/* Кнопки управления */}
                    <div className="controls-row">
                        <button onClick={goToPrevWord} className="nav-arrow prev-arrow" title="Предыдущее слово">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <div className="player-controls">
                            <button
                                onClick={() => setIsPlaying(true)}
                                disabled={isPlaying}
                                className={`player-btn play-btn ${isPlaying ? 'active' : ''}`}
                                title="Автоматический показ"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5L19 12L8 19V5Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            <button
                                onClick={() => setIsPlaying(false)}
                                disabled={!isPlaying}
                                className="player-btn pause-btn"
                                title="Пауза"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/>
                                    <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/>
                                </svg>
                            </button>
                        </div>

                        <button onClick={goToNextWord} className="nav-arrow next-arrow" title="Следующее слово">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    {/* Кнопка отметить выученным */}
                    <div className="learned-button-container">
                        <button onClick={toggleLearned} className="learned-btn">
                            {currentWord?.learned ? '✅ Выучено' : '⭐ Отметить выученным'}
                        </button>
                    </div>

                    {/* Настройки отображения */}
                    <div className="settings-section">
                        <div className="settings-header">
                            <h3>👁️ Отображение</h3>
                            <button
                                onClick={() => setShowDisplaySettings(!showDisplaySettings)}
                                className="settings-toggle-btn"
                            >
                                {showDisplaySettings ? '−' : '+'}
                            </button>
                        </div>

                        {showDisplaySettings && (
                            <div className="settings-content">
                                <label className="toggle">
                                    <input type="checkbox" checked={showEnglish} onChange={(e) => setShowEnglish(e.target.checked)} />
                                    <span className="toggle-slider"></span>
                                    <span className="toggle-label">🇬🇧 Английское слово</span>
                                </label>

                                <label className="toggle">
                                    <input type="checkbox" checked={showTranscription} onChange={(e) => setShowTranscription(e.target.checked)} />
                                    <span className="toggle-slider"></span>
                                    <span className="toggle-label">🔤 Транскрипция</span>
                                </label>

                                <label className="toggle">
                                    <input type="checkbox" checked={showRussian} onChange={(e) => setShowRussian(e.target.checked)} />
                                    <span className="toggle-slider"></span>
                                    <span className="toggle-label">🇷🇺 Русский перевод</span>
                                </label>

                                <label className="toggle">
                                    <input type="checkbox" checked={showSentenceEn} onChange={(e) => setShowSentenceEn(e.target.checked)} />
                                    <span className="toggle-slider"></span>
                                    <span className="toggle-label">📝 Английское предложение</span>
                                </label>

                                <label className="toggle">
                                    <input type="checkbox" checked={showSentenceRu} onChange={(e) => setShowSentenceRu(e.target.checked)} />
                                    <span className="toggle-slider"></span>
                                    <span className="toggle-label">📝 Перевод предложения</span>
                                </label>

                                <label className="toggle">
                                    <input type="checkbox" checked={highlightWords} onChange={(e) => setHighlightWords(e.target.checked)} />
                                    <span className="toggle-slider"></span>
                                    <span className="toggle-label">✨ Выделять слова</span>
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Настройки озвучки */}
                    <div className="settings-section">
                        <div className="settings-header">
                            <h3>🔊 Озвучка</h3>
                            <button
                                onClick={() => setShowVoiceSettings(!showVoiceSettings)}
                                className="settings-toggle-btn"
                            >
                                {showVoiceSettings ? '−' : '+'}
                            </button>
                        </div>

                        {showVoiceSettings && (
                            <div className="settings-content">
                                <label className="toggle">
                                    <input type="checkbox" checked={speakEnglish} onChange={(e) => setSpeakEnglish(e.target.checked)} />
                                    <span className="toggle-slider"></span>
                                    <span className="toggle-label">🇬🇧 Озвучивать английское</span>
                                </label>

                                <div className="speech-rate-control">
                                    <div className="rate-header">
                                        <span>🇬🇧 Скорость английской речи</span>
                                        <span className="rate-value">{englishSpeechRate.toFixed(1)}x</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0.5"
                                        max="1.5"
                                        step="0.1"
                                        value={englishSpeechRate}
                                        onChange={(e) => setEnglishSpeechRate(Number(e.target.value))}
                                        className="rate-slider"
                                    />
                                </div>

                                <label className="toggle">
                                    <input type="checkbox" checked={speakRussian} onChange={(e) => setSpeakRussian(e.target.checked)} />
                                    <span className="toggle-slider"></span>
                                    <span className="toggle-label">🇷🇺 Озвучивать русское</span>
                                </label>

                                <div className="speech-rate-control">
                                    <div className="rate-header">
                                        <span>🇷🇺 Скорость русской речи</span>
                                        <span className="rate-value">{russianSpeechRate.toFixed(1)}x</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0.2"
                                        max="5"
                                        step="0.1"
                                        value={russianSpeechRate}
                                        onChange={(e) => setRussianSpeechRate(Number(e.target.value))}
                                        className="rate-slider"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Настройки скорости показа */}
                    <div className="settings-section">
                        <div className="settings-header">
                            <h3>⏱️ Скорость показа</h3>
                            <button
                                onClick={() => setShowSpeedSettings(!showSpeedSettings)}
                                className="settings-toggle-btn"
                            >
                                {showSpeedSettings ? '−' : '+'}
                            </button>
                        </div>

                        {showSpeedSettings && (
                            <div className="settings-content">
                                <div className="speed-control">
                                    <div className="speed-header">
                                        <span className="speed-label">Пауза между словами</span>
                                        <span className="speed-value">{speed.toFixed(2)} сек</span>
                                    </div>

                                    <div className="speed-slider-container">
                                        <span className="speed-icon speed-fast">🐇</span>
                                        <input
                                            type="range"
                                            min="0.05"
                                            max="2"
                                            step="0.05"
                                            value={speed}
                                            onChange={(e) => {
                                                const newSpeed = Number(e.target.value);
                                                setSpeed(newSpeed);
                                                // Запоминаем пользовательскую скорость (только если озвучка выключена)
                                                if (!speakEnglish && !speakRussian) {
                                                    setUserSpeed(newSpeed);
                                                }
                                            }}
                                            className="speed-slider"
                                        />
                                        <span className="speed-icon speed-slow">🐢</span>
                                    </div>

                                    <div className="speed-presets">
                                        <button
                                            onClick={() => {
                                                const newSpeed = 0.1;
                                                setSpeed(newSpeed);
                                                if (!speakEnglish && !speakRussian) {
                                                    setUserSpeed(newSpeed);
                                                }
                                            }}
                                            className={`speed-preset ${Math.abs(speed - 0.1) < 0.01 ? 'active' : ''}`}
                                        >
                                            0.1с
                                        </button>
                                        <button
                                            onClick={() => {
                                                const newSpeed = 0.3;
                                                setSpeed(newSpeed);
                                                if (!speakEnglish && !speakRussian) {
                                                    setUserSpeed(newSpeed);
                                                }
                                            }}
                                            className={`speed-preset ${Math.abs(speed - 0.3) < 0.01 ? 'active' : ''}`}
                                        >
                                            0.3с
                                        </button>
                                        <button
                                            onClick={() => {
                                                const newSpeed = 0.5;
                                                setSpeed(newSpeed);
                                                if (!speakEnglish && !speakRussian) {
                                                    setUserSpeed(newSpeed);
                                                }
                                            }}
                                            className={`speed-preset ${Math.abs(speed - 0.5) < 0.01 ? 'active' : ''}`}
                                        >
                                            0.5с
                                        </button>
                                        <button
                                            onClick={() => {
                                                const newSpeed = 1.0;
                                                setSpeed(newSpeed);
                                                if (!speakEnglish && !speakRussian) {
                                                    setUserSpeed(newSpeed);
                                                }
                                            }}
                                            className={`speed-preset ${Math.abs(speed - 1.0) < 0.01 ? 'active' : ''}`}
                                        >
                                            1.0с
                                        </button>
                                        <button
                                            onClick={() => {
                                                const newSpeed = 1.5;
                                                setSpeed(newSpeed);
                                                if (!speakEnglish && !speakRussian) {
                                                    setUserSpeed(newSpeed);
                                                }
                                            }}
                                            className={`speed-preset ${Math.abs(speed - 1.5) < 0.01 ? 'active' : ''}`}
                                        >
                                            1.5с
                                        </button>
                                        <button
                                            onClick={() => {
                                                const newSpeed = 2.0;
                                                setSpeed(newSpeed);
                                                if (!speakEnglish && !speakRussian) {
                                                    setUserSpeed(newSpeed);
                                                }
                                            }}
                                            className={`speed-preset ${Math.abs(speed - 2.0) < 0.01 ? 'active' : ''}`}
                                        >
                                            2.0с
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default App;