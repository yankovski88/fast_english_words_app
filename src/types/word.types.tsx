export interface WordRow {
    id: number;
    word: string;
    transcription: string;
    translation: string;
    partOfSpeech: string;
    example: string;
    exampleTranslation: string;
    rootFamily: string;
    learned: boolean;
    blacklisted: boolean;
    notes?: string;
}