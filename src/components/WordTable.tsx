import React, { useState, useEffect, useRef } from 'react';
import { wordTable, WordRow } from '../data/wordTable';
import './WordTable.css';

// Функция для озвучивания слова (передадим из App)
declare global {
    interface Window {
        speakWord?: (text: string, lang: 'en' | 'ru') => void;
    }
}

const WordTable: React.FC = () => {
    const [words, setWords] = useState<WordRow[]>([]);
    const [filterFamily, setFilterFamily] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showLearned, setShowLearned] = useState(false);
    const [showBlacklisted, setShowBlacklisted] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState<Partial<WordRow>>({});
    const [showResetConfirm, setShowResetConfirm] = useState(false);
    const [showFamiliesProgress, setShowFamiliesProgress] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        loadData();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const loadData = () => {
        const allWords = wordTable.getAllWords();
        console.log('Загружено слов:', allWords.length);
        setWords(allWords);
    };

    // Получить уникальные семейства
    const families = [...new Set(words.map(w => w.rootFamily))].sort();

    // Фильтрация слов
    const getFilteredWords = () => {
        let filtered = [...words];

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(w =>
                w.rootFamily.toLowerCase().includes(term) ||
                w.word.toLowerCase().includes(term) ||
                w.translation.toLowerCase().includes(term)
            );
        }

        if (filterFamily !== 'all') {
            filtered = filtered.filter(w => w.rootFamily === filterFamily);
        }

        if (!showLearned) {
            filtered = filtered.filter(w => !w.learned);
        }

        if (!showBlacklisted) {
            filtered = filtered.filter(w => !w.blacklisted);
        }

        return filtered;
    };

    // Проверка, все ли слова в семействе выучены
    const isFamilyFullyLearned = (family: string): boolean => {
        const familyWords = words.filter(w => w.rootFamily === family);
        return familyWords.length > 0 && familyWords.every(w => w.learned);
    };

    const handleToggleLearned = (id: number) => {
        wordTable.toggleWordLearned(id);
        loadData();
    };

    const handleToggleBlacklist = (id: number) => {
        wordTable.toggleWordBlacklist(id);
        loadData();
    };

    // Редактирование
    const startEditing = (word: WordRow) => {
        setEditingId(word.id);
        setEditForm(word);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditForm({});
    };

    const saveEditing = (id: number) => {
        wordTable.editWord(id, editForm);
        setEditingId(null);
        setEditForm({});
        loadData();
    };

    const handleEditChange = (field: keyof WordRow, value: string | boolean) => {
        setEditForm(prev => ({ ...prev, [field]: value }));
    };

    // Сброс таблицы с подтверждением
    const handleResetClick = () => {
        setShowResetConfirm(true);
    };

    const confirmReset = () => {
        wordTable.resetToDefault();
        loadData();
        setShowResetConfirm(false);
    };

    const cancelReset = () => {
        setShowResetConfirm(false);
    };

    // Импорт JSON файла
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target?.result as string;
            const success = wordTable.importFromJSON(content);
            if (success) {
                loadData();
                alert('✅ JSON файл успешно загружен!');
            } else {
                alert('❌ Ошибка загрузки файла. Проверьте формат JSON.');
            }
        };
        reader.readAsText(file);
    };

    // Скачать пример шаблона JSON
    const downloadTemplate = () => {
        const template = wordTable.getImportTemplate();
        const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'word_template.json';
        link.click();
    };

    // Функция для выделения слова в предложении
    const highlightWordInExample = (text: string, word: string, lang: 'en' | 'ru') => {
        if (!text || !word) return text;

        const regex = new RegExp(`(${word})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, i) => {
            if (part.toLowerCase() === word.toLowerCase()) {
                return <mark key={i} className={`example-highlight example-highlight-${lang}`}>{part}</mark>;
            }
            return part;
        });
    };

    // Функция озвучивания
    const handleSpeak = (text: string, lang: 'en' | 'ru') => {
        if (window.speakWord) {
            window.speakWord(text, lang);
        } else {
            console.log('Функция озвучки не доступна');
        }
    };

    const filteredWords = getFilteredWords();

    // Статистика по семействам
    const familyStats = families.map(family => ({
        name: family,
        total: words.filter(w => w.rootFamily === family).length,
        learned: words.filter(w => w.rootFamily === family && w.learned).length,
        blacklisted: words.filter(w => w.rootFamily === family && w.blacklisted).length,
        fullyLearned: isFamilyFullyLearned(family)
    }));

    // Мобильное отображение карточки слова
    const renderMobileWordCard = (word: WordRow) => {
        const isEditing = editingId === word.id;

        if (isEditing) {
            return (
                <div key={word.id} className="mobile-word-card editing">
                    <div className="mobile-card-header">
                        <span className="mobile-word-id">#{word.id} (редактирование)</span>
                        <div className="mobile-card-actions">
                            <button onClick={() => saveEditing(word.id)} className="mobile-action-btn save" title="Сохранить">💾</button>
                            <button onClick={cancelEditing} className="mobile-action-btn cancel" title="Отмена">✖️</button>
                        </div>
                    </div>

                    <div className="mobile-edit-form">
                        <div className="mobile-edit-row">
                            <label>Слово:</label>
                            <input
                                value={editForm.word || ''}
                                onChange={(e) => handleEditChange('word', e.target.value)}
                                className="mobile-edit-input"
                            />
                        </div>
                        <div className="mobile-edit-row">
                            <label>Транскрипция:</label>
                            <input
                                value={editForm.transcription || ''}
                                onChange={(e) => handleEditChange('transcription', e.target.value)}
                                className="mobile-edit-input"
                            />
                        </div>
                        <div className="mobile-edit-row">
                            <label>Перевод:</label>
                            <input
                                value={editForm.translation || ''}
                                onChange={(e) => handleEditChange('translation', e.target.value)}
                                className="mobile-edit-input"
                            />
                        </div>
                        <div className="mobile-edit-row">
                            <label>Часть речи:</label>
                            <select
                                value={editForm.partOfSpeech || ''}
                                onChange={(e) => handleEditChange('partOfSpeech', e.target.value)}
                                className="mobile-edit-select"
                            >
                                <option>глагол</option>
                                <option>сущ.</option>
                                <option>прил.</option>
                                <option>наречие</option>
                            </select>
                        </div>
                        <div className="mobile-edit-row">
                            <label>Семейство:</label>
                            <select
                                value={editForm.rootFamily || ''}
                                onChange={(e) => handleEditChange('rootFamily', e.target.value)}
                                className="mobile-edit-select"
                            >
                                {families.map(f => (
                                    <option key={f} value={f}>{f}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mobile-edit-row">
                            <label>Пример (en):</label>
                            <textarea
                                value={editForm.example || ''}
                                onChange={(e) => handleEditChange('example', e.target.value)}
                                className="mobile-edit-textarea"
                                rows={2}
                            />
                        </div>
                        <div className="mobile-edit-row">
                            <label>Пример (ru):</label>
                            <textarea
                                value={editForm.exampleTranslation || ''}
                                onChange={(e) => handleEditChange('exampleTranslation', e.target.value)}
                                className="mobile-edit-textarea"
                                rows={2}
                            />
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div
                key={word.id}
                className={`mobile-word-card ${word.learned ? 'card-learned' : ''} ${word.blacklisted ? 'card-blacklisted' : ''}`}
            >
                <div className="mobile-card-header">
                    <span className="mobile-word-id">#{word.id}</span>
                    <div className="mobile-card-actions">
                        <button onClick={() => handleSpeak(word.word, 'en')} className="mobile-action-btn speak" title="Озвучить английское">🔊</button>
                        <button onClick={() => handleSpeak(word.translation, 'ru')} className="mobile-action-btn speak" title="Озвучить русское">🗣️</button>
                        <button onClick={() => startEditing(word)} className="mobile-action-btn edit" title="Редактировать">✏️</button>
                        <button onClick={() => handleToggleLearned(word.id)} className={`mobile-action-btn ${word.learned ? 'active' : ''}`} title="Выучено">
                            {word.learned ? '✅' : '⬜'}
                        </button>
                        <button onClick={() => handleToggleBlacklist(word.id)} className={`mobile-action-btn ${word.blacklisted ? 'active' : ''}`} title="Черный список">
                            {word.blacklisted ? '⛔' : '🚫'}
                        </button>
                    </div>
                </div>

                <div className="mobile-word-main">
                    <div className="mobile-word-row">
                        <span className="mobile-label">Слово:</span>
                        <span className="mobile-word">{word.word}</span>
                    </div>
                    <div className="mobile-word-row">
                        <span className="mobile-label">Транскрипция:</span>
                        <span className="mobile-transcription">{word.transcription}</span>
                    </div>
                    <div className="mobile-word-row">
                        <span className="mobile-label">Перевод:</span>
                        <span className="mobile-translation">{word.translation}</span>
                    </div>
                    <div className="mobile-word-row">
                        <span className="mobile-label">Часть речи:</span>
                        <span className="mobile-pos">{word.partOfSpeech}</span>
                    </div>
                    <div className="mobile-word-row">
                        <span className="mobile-label">Семейство:</span>
                        <span className="mobile-family">{word.rootFamily}</span>
                    </div>
                </div>

                <div className="mobile-examples">
                    <div className="mobile-example-en">
                        {highlightWordInExample(word.example, word.word, 'en')}
                    </div>
                    <div className="mobile-example-ru">
                        {highlightWordInExample(word.exampleTranslation, word.translation, 'ru')}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="word-table-container">
            <div className="table-header">
                <h2>📚 Управление словами</h2>

                <div className="table-controls">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="🔍 Поиск по слову или семейству..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="filter-group">
                        <select
                            value={filterFamily}
                            onChange={(e) => setFilterFamily(e.target.value)}
                            className="filter-select"
                        >
                            <option value="all">📁 Все семейства</option>
                            {familyStats.map(f => (
                                <option key={f.name} value={f.name}>
                                    {f.name} {f.fullyLearned ? '✅' : ''} ({f.learned}/{f.total})
                                </option>
                            ))}
                        </select>

                        <label className="filter-checkbox">
                            <input
                                type="checkbox"
                                checked={showLearned}
                                onChange={(e) => setShowLearned(e.target.checked)}
                            />
                            <span>✅ Выученные</span>
                        </label>

                        <label className="filter-checkbox">
                            <input
                                type="checkbox"
                                checked={showBlacklisted}
                                onChange={(e) => setShowBlacklisted(e.target.checked)}
                            />
                            <span>⛔ Черный список</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Прогресс по семействам */}
            <div className="families-progress">
                <div className="families-header">
                    <h4>📊 Прогресс по семействам</h4>
                    <button
                        onClick={() => setShowFamiliesProgress(!showFamiliesProgress)}
                        className="families-toggle-btn"
                    >
                        {showFamiliesProgress ? '−' : '+'}
                    </button>
                </div>

                {showFamiliesProgress && (
                    <div className="families-content">
                        <div className="family-badges">
                            {familyStats.map(family => (
                                <div
                                    key={family.name}
                                    className={`family-badge ${family.fullyLearned ? 'family-complete' : ''}`}
                                    onClick={() => setFilterFamily(family.name)}
                                >
                                    <span className="family-name">{family.name}</span>
                                    <span className="family-progress">
                    {family.learned}/{family.total}
                  </span>
                                    {family.blacklisted > 0 && (
                                        <span className="family-blacklist">⛔ {family.blacklisted}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Десктопная таблица */}
            {!isMobile && (
                <div className="table-wrapper">
                    <table className="word-table">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Действия</th>
                            <th>Слово</th>
                            <th>Транскрипция</th>
                            <th>Перевод</th>
                            <th>Часть речи</th>
                            <th>Пример</th>
                            <th>Семейство</th>
                            <th>✅</th>
                            <th>⛔</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredWords.map(word => (
                            <tr
                                key={word.id}
                                className={`
                    ${word.learned ? 'row-learned' : ''} 
                    ${word.blacklisted ? 'row-blacklisted' : ''}
                  `}
                            >
                                <td className="id-cell">{word.id}</td>

                                <td className="actions-cell">
                                    <button onClick={() => handleSpeak(word.word, 'en')} className="action-btn" title="Озвучить английское">🔊</button>
                                    <button onClick={() => handleSpeak(word.translation, 'ru')} className="action-btn" title="Озвучить русское">🗣️</button>
                                    {editingId === word.id ? (
                                        <>
                                            <button onClick={() => saveEditing(word.id)} className="action-btn save" title="Сохранить">💾</button>
                                            <button onClick={cancelEditing} className="action-btn cancel" title="Отмена">✖️</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => startEditing(word)} className="action-btn edit" title="Редактировать">✏️</button>
                                        </>
                                    )}
                                </td>

                                {editingId === word.id ? (
                                    <>
                                        <td><input value={editForm.word || ''} onChange={(e) => handleEditChange('word', e.target.value)} className="edit-input" /></td>
                                        <td><input value={editForm.transcription || ''} onChange={(e) => handleEditChange('transcription', e.target.value)} className="edit-input" /></td>
                                        <td><input value={editForm.translation || ''} onChange={(e) => handleEditChange('translation', e.target.value)} className="edit-input" /></td>
                                        <td>
                                            <select value={editForm.partOfSpeech || ''} onChange={(e) => handleEditChange('partOfSpeech', e.target.value)} className="edit-select">
                                                <option>глагол</option>
                                                <option>сущ.</option>
                                                <option>прил.</option>
                                                <option>наречие</option>
                                            </select>
                                        </td>
                                        <td>
                                            <textarea value={editForm.example || ''} onChange={(e) => handleEditChange('example', e.target.value)} className="edit-textarea" rows={2} />
                                            <textarea value={editForm.exampleTranslation || ''} onChange={(e) => handleEditChange('exampleTranslation', e.target.value)} className="edit-textarea" rows={2} placeholder="Перевод" />
                                        </td>
                                        <td>
                                            <select value={editForm.rootFamily || ''} onChange={(e) => handleEditChange('rootFamily', e.target.value)} className="edit-select">
                                                {families.map(f => (
                                                    <option key={f} value={f}>{f}</option>
                                                ))}
                                            </select>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="word-cell">{word.word}</td>
                                        <td className="transcription-cell">{word.transcription}</td>
                                        <td className="translation-cell">{word.translation}</td>
                                        <td className="pos-cell">{word.partOfSpeech}</td>
                                        <td className="example-cell">
                                            <div className="example-en">
                                                {highlightWordInExample(word.example, word.word, 'en')}
                                            </div>
                                            <div className="example-ru">
                                                {highlightWordInExample(word.exampleTranslation, word.translation, 'ru')}
                                            </div>
                                        </td>
                                        <td className="family-cell">{word.rootFamily}</td>
                                    </>
                                )}

                                <td className="checkbox-cell">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={word.learned}
                                            onChange={() => handleToggleLearned(word.id)}
                                        />
                                        <span className="checkbox-custom"></span>
                                    </label>
                                </td>

                                <td className="checkbox-cell">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={word.blacklisted}
                                            onChange={() => handleToggleBlacklist(word.id)}
                                        />
                                        <span className="checkbox-custom"></span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Мобильные карточки */}
            {isMobile && (
                <div className="mobile-words-list">
                    {filteredWords.map(word => renderMobileWordCard(word))}
                    {filteredWords.length === 0 && (
                        <div className="mobile-no-words">Нет слов для отображения</div>
                    )}
                </div>
            )}

            {/* Кнопки управления файлами */}
            <div className="file-actions">
                <div className="file-upload-group">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept=".json"
                        style={{ display: 'none' }}
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="btn-upload"
                        title="Загрузить JSON файл со словами"
                    >
                        📂 Загрузить JSON
                    </button>
                    <button
                        onClick={downloadTemplate}
                        className="btn-template"
                        title="Скачать пример шаблона JSON"
                    >
                        📥 Шаблон JSON
                    </button>
                </div>

                <div className="reset-group">
                    <button onClick={handleResetClick} className="btn-reset" title="Сбросить к начальному списку слов">
                        🔄 Сброс
                    </button>

                    {showResetConfirm && (
                        <div className="reset-confirm">
                            <span>Сбросить все слова?</span>
                            <button onClick={confirmReset} className="confirm-yes">✅ Да</button>
                            <button onClick={cancelReset} className="confirm-no">❌ Нет</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Статистика */}
            <div className="table-stats">
                <div className="stat-item">
                    <span className="stat-label">📊 Всего:</span>
                    <span className="stat-value">{words.length}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">✅ Выучено:</span>
                    <span className="stat-value">{words.filter(w => w.learned).length}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">📚 В процессе:</span>
                    <span className="stat-value">{words.filter(w => !w.learned && !w.blacklisted).length}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">⛔ ЧС:</span>
                    <span className="stat-value">{words.filter(w => w.blacklisted).length}</span>
                </div>
            </div>
        </div>
    );
};

export default WordTable;