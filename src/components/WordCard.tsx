import React from 'react';
import { WordRow } from '../types/word.types';

interface WordCardProps {
    currentWord: WordRow;
    showEnglish: boolean;
    showTranscription: boolean;
    showRussian: boolean;
    showSentenceEn: boolean;
    showSentenceRu: boolean;
    highlightWords: boolean;
    isSpeaking: boolean;
    speakEnglish: boolean;
    speakRussian: boolean;
    speakEnglishManually: () => void;
    highlightWordInSentence: (sentence: string, word: string, lang: 'en' | 'ru') => React.ReactNode;
}

const WordCard: React.FC<WordCardProps> = ({
                                               currentWord,
                                               showEnglish,
                                               showTranscription,
                                               showRussian,
                                               showSentenceEn,
                                               showSentenceRu,
                                               highlightWords,
                                               isSpeaking,
                                               speakEnglish,
                                               speakRussian,
                                               speakEnglishManually,
                                               highlightWordInSentence
                                           }) => {
    const nothingToShow = !showEnglish && !showTranscription && !showRussian &&
        !showSentenceEn && !showSentenceRu;

    if (nothingToShow) {
        return (
            <div className="word-card">
                <div className="placeholder-message">
                    👆 Включите показ слов
                </div>
            </div>
        );
    }

    return (
        <div className="word-card">
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

            <div className="word-with-speak">
                {showEnglish && (
                    <>
                        <button onClick={speakEnglishManually} className="speak-word-btn" title="Озвучить английское слово">
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

            {isSpeaking && (speakEnglish || speakRussian) && (
                <div className="speaking-badge">🔊</div>
            )}
        </div>
    );
};

export default WordCard;