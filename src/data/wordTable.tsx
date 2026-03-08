import { WordRow } from '../types/word.types';
import wordsData from './words.json';

// Преобразуем JSON данные в формат WordRow с добавлением полей learned и blacklisted
export const INITIAL_WORDS_TABLE: WordRow[] = wordsData.map(word => ({
    ...word,
    learned: false,
    blacklisted: false
}));

export class WordTableManager {
    private words: WordRow[];

    constructor() {
        console.log('📊 WordTableManager инициализирован');
        this.words = [];
        this.loadFromStorage();
    }

    private loadFromStorage(): void {
        try {
            const saved = localStorage.getItem('wordTable');
            console.log('📦 Загрузка из localStorage:', saved ? 'данные есть' : 'данных нет');

            if (saved) {
                this.words = JSON.parse(saved);
                console.log(`✅ Загружено ${this.words.length} слов из localStorage`);
            } else {
                console.log('📝 Используем начальные данные из JSON');
                // Важно: создаем копию каждого слова, чтобы не мутировать исходные данные
                this.words = INITIAL_WORDS_TABLE.map(word => ({
                    id: word.id,
                    word: word.word,
                    transcription: word.transcription,
                    translation: word.translation,
                    partOfSpeech: word.partOfSpeech,
                    example: word.example,
                    exampleTranslation: word.exampleTranslation,
                    rootFamily: word.rootFamily,
                    learned: false,
                    blacklisted: false
                }));
                console.log(`✅ Загружено ${this.words.length} слов из JSON`);
                console.log('Первые 3 слова:', this.words.slice(0, 3));
                // Сразу сохраняем в localStorage
                this.saveToStorage();
            }

        } catch (error) {
            console.error('❌ Ошибка загрузки:', error);
            // В случае ошибки используем INITIAL_WORDS_TABLE
            this.words = INITIAL_WORDS_TABLE.map(word => ({ ...word }));
            this.saveToStorage();
        }
    }

    private saveToStorage(): void {
        try {
            localStorage.setItem('wordTable', JSON.stringify(this.words));
            console.log(`💾 Сохранено ${this.words.length} слов в localStorage`);
        } catch (error) {
            console.error('❌ Ошибка сохранения:', error);
        }
    }

    public getAllWords(): WordRow[] {
        return [...this.words];
    }

    public getStudyWords(): WordRow[] {
        const studyWords = this.words.filter(word => !word.learned && !word.blacklisted);
        console.log(`📚 getStudyWords(): ${studyWords.length} слов для изучения`);
        return studyWords;
    }

    public toggleWordLearned(id: number): void {
        const word = this.words.find(w => w.id === id);
        if (word) {
            word.learned = !word.learned;
            if (word.learned) {
                word.blacklisted = false;
            }
            console.log(`🔄 Слово ${word.word} (ID: ${id}) теперь ${word.learned ? 'выучено' : 'не выучено'}`);
            this.saveToStorage();
        }
    }

    public toggleWordBlacklist(id: number): void {
        const word = this.words.find(w => w.id === id);
        if (word) {
            word.blacklisted = !word.blacklisted;
            if (word.blacklisted) {
                word.learned = false;
            }
            console.log(`⛔ Слово ${word.word} (ID: ${id}) теперь ${word.blacklisted ? 'в черном списке' : 'не в черном списке'}`);
            this.saveToStorage();
        }
    }

    public editWord(id: number, updates: Partial<WordRow>): void {
        const index = this.words.findIndex(w => w.id === id);
        if (index !== -1) {
            this.words[index] = { ...this.words[index], ...updates };
            console.log(`✏️ Слово ID: ${id} отредактировано`);
            this.saveToStorage();
        }
    }

    public resetToDefault(): void {
        console.log('🔄 Сброс к начальным данным из JSON');
        this.words = INITIAL_WORDS_TABLE.map(word => ({
            id: word.id,
            word: word.word,
            transcription: word.transcription,
            translation: word.translation,
            partOfSpeech: word.partOfSpeech,
            example: word.example,
            exampleTranslation: word.exampleTranslation,
            rootFamily: word.rootFamily,
            learned: false,
            blacklisted: false
        }));
        this.saveToStorage();
    }

    public exportToJSON(): string {
        return JSON.stringify(this.words, null, 2);
    }

    public importFromJSON(jsonString: string): boolean {
        try {
            const imported = JSON.parse(jsonString);
            if (Array.isArray(imported)) {
                this.words = imported.map(word => ({
                    id: word.id,
                    word: word.word,
                    transcription: word.transcription,
                    translation: word.translation,
                    partOfSpeech: word.partOfSpeech,
                    example: word.example,
                    exampleTranslation: word.exampleTranslation,
                    rootFamily: word.rootFamily,
                    learned: word.learned || false,
                    blacklisted: word.blacklisted || false
                }));
                console.log(`📥 Импортировано ${this.words.length} слов из JSON`);
                this.saveToStorage();
                return true;
            }
        } catch (error) {
            console.error('❌ Ошибка импорта JSON:', error);
        }
        return false;
    }
}

// Создаем и экспортируем единственный экземпляр
export const wordTable = new WordTableManager();