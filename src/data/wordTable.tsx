import { WordRow } from '../types/word.types';
import { getAllWordsFromFirestore } from '../firebase/firestore';

export class WordTableManager {
    private words: WordRow[] = [];

    constructor() {
        console.log('📊 WordTableManager инициализирован');
        // Не загружаем сразу, loadFromStorage будет вызван позже
    }

    // Загружаем слова из Firestore
    async loadFromFirestore(): Promise<void> {
        try {
            this.words = await getAllWordsFromFirestore();
            console.log(`✅ Загружено ${this.words.length} слов из Firestore`);
        } catch (error) {
            console.error('❌ Ошибка загрузки из Firestore:', error);
            this.words = [];
        }
    }

    // Получить все слова
    async getAllWords(): Promise<WordRow[]> {
        if (this.words.length === 0) {
            await this.loadFromFirestore();
        }
        return [...this.words];
    }

    // Получить слова для изучения (без учета прогресса - прогресс добавляется в FamilyContext)
    getStudyWords(): WordRow[] {
        return this.words.filter(word => !word.learned && !word.blacklisted);
    }

    // Эти методы теперь не используются (прогресс в Firestore)
    toggleWordLearned(id: number): void {
        console.warn('toggleWordLearned должен вызываться через FamilyContext');
    }

    toggleWordBlacklist(id: number): void {
        console.warn('toggleWordBlacklist должен вызываться через FamilyContext');
    }

    editWord(id: number, updates: Partial<WordRow>): void {
        console.warn('editWord временно не поддерживается');
    }

    resetToDefault(): void {
        console.warn('resetToDefault временно не поддерживается');
    }

    exportToJSON(): string {
        return JSON.stringify(this.words, null, 2);
    }

    importFromJSON(jsonString: string): boolean {
        console.warn('importFromJSON временно не поддерживается');
        return false;
    }

    getImportTemplate(): any {
        return [
            {
                id: 1,
                word: "example",
                transcription: "/ɪɡˈzæmpəl/",
                translation: "пример",
                partOfSpeech: "сущ.",
                example: "This is an example sentence.",
                exampleTranslation: "Это пример предложения.",
                rootFamily: "example"
            }
        ];
    }
}

export const wordTable = new WordTableManager();