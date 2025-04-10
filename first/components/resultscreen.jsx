import React from 'react'; // Burada React kütüphanesini içe aktarıyoruz

const ResultScreen = ({ answers, questions }) => { // ResultScreen bileşenini tanımlıyoruz. ResultScreen bileşeni, answers ve questions adında iki prop alıyor.
    // result değişkeni, answers ve questions prop'larını kullanarak her bir sorunun doğru veya yanlış olup olmadığını kontrol ediyor.
    const result = questions.map((q, i) => {
        const isCorrect = answers[i] === q.answer;
        return {
            answered: answers[i],
            correct: isCorrect,
        };
    });

    const correctCount = result.filter((r) => r.correct).length; // Doğru cevap sayısını hesaplıyoruz
    const emptyCount = result.filter((r) => r.answered === null).length; // Boş cevap sayısını hesaplıyoruz
    const wrongCount = questions.length - correctCount - emptyCount; // Yanlış cevap sayısını hesaplıyoruz

    // Sonuçları ekrana yazdırıyoruz
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

            <img
                src="https://store.donanimhaber.com/d5/ac/f8/d5acf82fc76b9082cb9b6c94293545f9.gif"
                alt="kedi"
                className="mt-10 w-[200px] rounded-xl border border-pink-400 shadow-lg"
            />

            <p className="mt-4 italic text-pink-300 text-center text-sm sm:text-base">
                “Her boş kutu umut taşır, ama en cesur kedi ilk girer.”
            </p>
        </div>
    );
};

export default ResultScreen;

