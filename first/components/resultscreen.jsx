import React from 'react';

const ResultScreen = ({ answers, questions }) => {
    const result = questions.map((q, i) => {
        const isCorrect = answers[i] === q.answer;
        return {
            answered: answers[i],
            correct: isCorrect,
        };
    });

    const correctCount = result.filter((r) => r.correct).length;
    const emptyCount = result.filter((r) => r.answered === null).length;
    const wrongCount = questions.length - correctCount - emptyCount;

    return (
        <div class="sonucekran">
            <h2 className="sonuc text-2xl font-bold mb-4">Test Sonucu</h2>
            <p className="dogru mb-2 font-bold">Doğru: {correctCount}</p>
            <p className="yanlis mb-2 font-bold">Yanlış: {wrongCount}</p>
            <p className="bos mb-2 font-bold">Boş: {emptyCount}</p>
            <img src="https://media.tenor.com/gE3tcRTD9QIAAAAM/funny-cat-cat.gif" alt="kedi" class="endcat" />
            <p class="kedi">“Her boş kutu umut taşır, ama en cesur kedi ilk girer.”</p>
        </div>
    );
};

export default ResultScreen;
