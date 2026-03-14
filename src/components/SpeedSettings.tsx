import React from 'react';

interface SpeedSettingsProps {
    speed: number;
    setSpeed: (value: number) => void;
    setUserSpeed: (value: number) => void;
    speakEnglish: boolean;
    speakRussian: boolean;
    showSpeedSettings: boolean;
    setShowSpeedSettings: (value: boolean) => void;
}

const SpeedSettings: React.FC<SpeedSettingsProps> = ({
                                                         speed,
                                                         setSpeed,
                                                         setUserSpeed,
                                                         speakEnglish,
                                                         speakRussian,
                                                         showSpeedSettings,
                                                         setShowSpeedSettings
                                                     }) => {
    return (
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
                                    if (!speakEnglish && !speakRussian) {
                                        setUserSpeed(newSpeed);
                                    }
                                }}
                                className="speed-slider"
                            />
                            <span className="speed-icon speed-slow">🐢</span>
                        </div>

                        <div className="speed-presets">
                            {[0.1, 0.3, 0.5, 1.0, 1.5, 2.0].map((preset) => (
                                <button
                                    key={preset}
                                    onClick={() => {
                                        setSpeed(preset);
                                        if (!speakEnglish && !speakRussian) {
                                            setUserSpeed(preset);
                                        }
                                    }}
                                    className={`speed-preset ${Math.abs(speed - preset) < 0.01 ? 'active' : ''}`}
                                >
                                    {preset.toFixed(1)}с
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpeedSettings;