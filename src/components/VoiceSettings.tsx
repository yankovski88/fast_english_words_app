import React from 'react';

interface VoiceSettingsProps {
    speakEnglish: boolean;
    setSpeakEnglish: (value: boolean) => void;
    speakRussian: boolean;
    setSpeakRussian: (value: boolean) => void;
    englishSpeechRate: number;
    setEnglishSpeechRate: (value: number) => void;
    russianSpeechRate: number;
    setRussianSpeechRate: (value: number) => void;
    showVoiceSettings: boolean;
    setShowVoiceSettings: (value: boolean) => void;
}

const VoiceSettings: React.FC<VoiceSettingsProps> = ({
                                                         speakEnglish,
                                                         setSpeakEnglish,
                                                         speakRussian,
                                                         setSpeakRussian,
                                                         englishSpeechRate,
                                                         setEnglishSpeechRate,
                                                         russianSpeechRate,
                                                         setRussianSpeechRate,
                                                         showVoiceSettings,
                                                         setShowVoiceSettings
                                                     }) => {
    return (
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
                        <input
                            type="checkbox"
                            checked={speakEnglish}
                            onChange={(e) => setSpeakEnglish(e.target.checked)}
                        />
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
                        <input
                            type="checkbox"
                            checked={speakRussian}
                            onChange={(e) => setSpeakRussian(e.target.checked)}
                        />
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
                            max="3"
                            step="0.1"
                            value={russianSpeechRate}
                            onChange={(e) => setRussianSpeechRate(Number(e.target.value))}
                            className="rate-slider"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VoiceSettings;