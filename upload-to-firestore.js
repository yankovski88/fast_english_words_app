const admin = require('firebase-admin');
const fs = require('fs');

// Инициализация с сервисным аккаунтом
const serviceAccount = require('./scripts/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Чтение JSON файла со словами
const wordsData = JSON.parse(fs.readFileSync('./words_for_firestore.json', 'utf8'));

async function uploadWords() {
    console.log('🚀 Начинаем загрузку слов в Firestore...');

    const words = wordsData.words;
    let count = 0;

    for (const [id, wordData] of Object.entries(words)) {
        try {
            await db.collection('words').doc(id.toString()).set(wordData);
            count++;
            console.log(`✅ Загружено слово ${count}: ${wordData.word} (ID: ${id})`);
        } catch (error) {
            console.error(`❌ Ошибка загрузки слова ID ${id}:`, error);
        }
    }

    console.log(`🎉 Загрузка завершена! Загружено ${count} слов.`);
}

uploadWords().catch(console.error);