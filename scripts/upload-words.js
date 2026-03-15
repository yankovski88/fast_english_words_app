import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к файлу со словами
const wordsJsonPath = path.join(__dirname, '../src/data/words.json');

// Читаем слова
const words = JSON.parse(fs.readFileSync(wordsJsonPath, 'utf8'));

console.log(`📚 Загружено ${words.length} слов из файла`);

// Подключаемся к Firebase
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function uploadWords() {
    console.log('🚀 Начинаем загрузку слов в Firestore...');

    let success = 0;
    let errors = 0;

    for (const word of words) {
        try {
            await db.collection('words').doc(word.id.toString()).set({
                id: word.id,
                word: word.word,
                transcription: word.transcription,
                translation: word.translation,
                partOfSpeech: word.partOfSpeech,
                example: word.example,
                exampleTranslation: word.exampleTranslation,
                rootFamily: word.rootFamily
            });

            console.log(`✅ Загружено: ${word.word} (ID: ${word.id})`);
            success++;

            // Небольшая задержка
            await new Promise(resolve => setTimeout(resolve, 200));

        } catch (error) {
            console.error(`❌ Ошибка при загрузке слова ${word.word}:`, error.message);
            errors++;
        }
    }

    console.log(`\n🎉 Загрузка завершена!`);
    console.log(`✅ Успешно: ${success}`);
    console.log(`❌ Ошибок: ${errors}`);
}

uploadWords().catch(console.error);