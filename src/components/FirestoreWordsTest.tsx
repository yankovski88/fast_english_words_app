import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const FirestoreWordsTest: React.FC = () => {
    const [words, setWords] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadWords = async () => {
            try {
                console.log('🔍 Загружаем слова из Firestore...');
                const wordsRef = collection(db, 'words');
                const snapshot = await getDocs(wordsRef);

                console.log(`📊 Найдено документов: ${snapshot.size}`);

                const wordsList: any[] = [];
                snapshot.forEach(doc => {
                    wordsList.push({ id: doc.id, ...doc.data() });
                });

                console.log('📝 Первые 3 слова:', wordsList.slice(0, 3));
                setWords(wordsList);
            } catch (err) {
                console.error('❌ Ошибка загрузки:', err);
                setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
            } finally {
                setLoading(false);
            }
        };

        loadWords();
    }, []);

    if (loading) return <div>🔄 Загрузка слов из Firestore...</div>;
    if (error) return <div>❌ Ошибка: {error}</div>;

    return (
        <div style={{ padding: '20px', background: '#f0f5fa', borderRadius: '8px', margin: '10px 0' }}>
            <h3>📊 Firestore Words Test</h3>
            <p>Всего слов в Firestore: <strong>{words.length}</strong></p>
            {words.length > 0 ? (
                <ul>
                    {words.slice(0, 5).map(word => (
                        <li key={word.id}>
                            <strong>{word.word}</strong> - {word.translation}
                            <span style={{ color: '#718096', marginLeft: '10px' }}>
                (ID: {word.id}, сем: {word.rootFamily})
              </span>
                        </li>
                    ))}
                    {words.length > 5 && <li>... и еще {words.length - 5} слов</li>}
                </ul>
            ) : (
                <p style={{ color: '#f56565' }}>⚠️ Слова не найдены в Firestore!</p>
            )}
        </div>
    );
};

export default FirestoreWordsTest;