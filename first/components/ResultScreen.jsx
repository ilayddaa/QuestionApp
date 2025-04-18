import React from 'react';

const ResultScreen = ({ answers, questions }) => {
    // Soruların sonuçlarını hesapla
    const result = questions.map((q, i) => {
        const isCorrect = answers[i] === q.correctAnswer;
        return {
            question: q.question,
            answered: answers[i] || "Boş", // Eğer cevap verilmemişse "Boş" yaz
            correctAnswer: q.correctAnswer,
            isCorrect: isCorrect,
        };
    });

    const correctCount = result.filter((r) => r.isCorrect).length;
    const wrongCount = result.filter((r) => !r.isCorrect && r.answered !== "Boş").length;
    const emptyCount = result.filter((r) => r.answered === "Boş").length;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-10">
            <div className="bg-white/10 border border-pink-400 rounded-2xl shadow-2xl p-10 text-center max-w-xl w-full">
                <h2 className="text-4xl font-extrabold text-white mb-6 tracking-wide animate-bounce">
                    🎉 Test Sonucu
                </h2>

                <div className="space-y-3 text-lg">
                    <p className="text-green-400 font-bold">
                        ✅ Doğru: <span className="text-white">{correctCount}</span>
                    </p>
                    <p className="text-red-400 font-bold">
                        ❌ Yanlış: <span className="text-white">{wrongCount}</span>
                    </p>
                    <p className="text-yellow-300 font-bold">
                        ⏳ Boş: <span className="text-white">{emptyCount}</span>
                    </p>
                </div>
            </div>

            <div className="mt-10 bg-white/10 border border-pink-400 rounded-2xl shadow-2xl p-6 w-full max-w-3xl">
                <h3 className="text-2xl font-bold text-white mb-4">📋 Soruların Özeti</h3>
                <ul className="space-y-4">
                    {result.map((r, index) => (
                        <li
                            key={index}
                            className={`p-4 rounded-lg ${r.isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'
                                }`}
                        >
                            <p className="text-lg font-semibold">
                                <span className="text-yellow-300">Soru {index + 1}:</span> {r.question}
                            </p>
                            <p className="text-sm">
                                <span className="font-bold text-white">Verilen Cevap:</span>{' '}
                                {r.answered}
                            </p>
                            <p className="text-sm">
                                <span className="font-bold text-green-400">Doğru Cevap:</span>{' '}
                                {r.correctAnswer}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <img
                src="https://store.donanimhaber.com/d5/ac/f8/d5acf82fc76b9082cb9b6c94293545f9.gif"
                alt="kedi"
                className="mt-10 w-[200px] rounded-xl border border-pink-400 shadow-lg"
            />

            <p className="mt-4 italic text-white text-center text-sm sm:text-base">
                “Her boş kutu umut taşır, ama en cesur kedi ilk girer.”
            </p>
        </div>
    );
};

export default ResultScreen;