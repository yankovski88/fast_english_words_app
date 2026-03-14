import React from 'react';

interface NavigationControlsProps {
    goToPrevWord: () => void;
    goToNextWord: () => void;
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    toggleLearned: () => void;
    currentWordLearned?: boolean;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
                                                                   goToPrevWord,
                                                                   goToNextWord,
                                                                   isPlaying,
                                                                   setIsPlaying,
                                                                   toggleLearned,
                                                                   currentWordLearned
                                                               }) => {
    return (
        <>
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

            <div className="learned-button-container">
                <button onClick={toggleLearned} className="learned-btn">
                    {currentWordLearned ? '✅ Выучено' : '⭐ Отметить выученным'}
                </button>
            </div>
        </>
    );
};

export default NavigationControls;