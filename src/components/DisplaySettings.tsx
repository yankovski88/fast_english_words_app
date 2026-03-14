import React from 'react';

interface DisplaySettingsProps {
    showEnglish: boolean;
    setShowEnglish: (value: boolean) => void;
    showTranscription: boolean;
    setShowTranscription: (value: boolean) => void;
    showRussian: boolean;
    setShowRussian: (value: boolean) => void;
    showSentenceEn: boolean;
    setShowSentenceEn: (value: boolean) => void;
    showSentenceRu: boolean;
    setShowSentenceRu: (value: boolean) => void;
    highlightWords: boolean;
    setHighlightWords: (value: boolean) => void;
    showDisplaySettings: boolean;
    setShowDisplaySettings: (value: boolean) => void;
}

const DisplaySettings: React.FC<DisplaySettingsProps> = ({
                                                             showEnglish,
                                                             setShowEnglish,
                                                             showTranscription,
                                                             setShowTranscription,
                                                             showRussian,
                                                             setShowRussian,
                                                             showSentenceEn,
                                                             setShowSentenceEn,
                                                             showSentenceRu,
                                                             setShowSentenceRu,
                                                             highlightWords,
                                                             setHighlightWords,
                                                             showDisplaySettings,
                                                             setShowDisplaySettings
                                                         }) => {
    return (
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
                        <input
                            type="checkbox"
                            checked={showEnglish}
                            onChange={(e) => setShowEnglish(e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                        <span className="toggle-label">🇬🇧 Английское слово</span>
                    </label>

                    <label className="toggle">
                        <input
                            type="checkbox"
                            checked={showTranscription}
                            onChange={(e) => setShowTranscription(e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                        <span className="toggle-label">🔤 Транскрипция</span>
                    </label>

                    <label className="toggle">
                        <input
                            type="checkbox"
                            checked={showRussian}
                            onChange={(e) => setShowRussian(e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                        <span className="toggle-label">🇷🇺 Русский перевод</span>
                    </label>

                    <label className="toggle">
                        <input
                            type="checkbox"
                            checked={showSentenceEn}
                            onChange={(e) => setShowSentenceEn(e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                        <span className="toggle-label">📝 Английское предложение</span>
                    </label>

                    <label className="toggle">
                        <input
                            type="checkbox"
                            checked={showSentenceRu}
                            onChange={(e) => setShowSentenceRu(e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                        <span className="toggle-label">📝 Перевод предложения</span>
                    </label>

                    <label className="toggle">
                        <input
                            type="checkbox"
                            checked={highlightWords}
                            onChange={(e) => setHighlightWords(e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                        <span className="toggle-label">✨ Выделять слова</span>
                    </label>
                </div>
            )}
        </div>
    );
};

export default DisplaySettings;