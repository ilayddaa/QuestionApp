import React, { useEffect, useState } from 'react';

// QuestionScreen bileşeni, bir soruyu ve şıkları gösteren bir bileşendir.
const QuestionScreen = ({ question, onAnswer, questionIndex, total }) => {
    const [timeLeft, setTimeLeft] = useState(30); // Başlangıçta 30 saniye
    const [showOptions, setShowOptions] = useState(false); // Şıkları gösterme durumu
    const [selected, setSelected] = useState(null); // Seçilen şık

    // Sorular değiştiğinde zamanlayıcıyı sıfırla ve şıkları göster
    useEffect(() => {
        setTimeLeft(30);
        setShowOptions(false); // Şıkları gizle
        setSelected(null); // Seçimi sıfırla

        // Zamanlayıcıyı başlat
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000); // Her saniye güncelle

        const showOptionsTimeout = setTimeout(() => setShowOptions(true), 4000); // 4 saniye sonra şıkları göster

        // Eğer zaman dolarsa, otomatik olarak cevap ver
        const autoNextTimeout = setTimeout(() => {
            if (!selected) onAnswer(null);
        }, 30000);

        return () => {
            clearInterval(timer);
            clearTimeout(showOptionsTimeout);
            clearTimeout(autoNextTimeout);
        };
    }, [question]);

    // Zamanlayıcı sıfırlandığında, zamanlayıcıyı temizle
    const handleClick = (option) => {
        if (selected) return;
        setSelected(option);
        setTimeout(() => onAnswer(option), 500);
    };

    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-start px-6 py-10">
            <h2 className="text-2xl font-extrabold mb-6 text-white tracking-wide animate-pulse">
                🧠 Soru {questionIndex} / {total}
            </h2>

            <img
                src={question.media}
                alt="soru"
                className="rounded-xl shadow-xl w-full max-w-[600px] h-[250px] object-cover mb-6 border-4 border-pink-500"
            />

            <p className="text-xl font-semibold text-center mb-6 max-w-[800px] leading-relaxed">
                {question.question}
            </p>

            <p className="text-lg font-bold text-yellow-300 mb-2 animate-pulse">
                ⏳ Kalan Süre: {timeLeft} saniye
            </p>

            <div className="w-full max-w-[600px] h-4 bg-gray-300 rounded-full mb-6">
                <div
                    className="h-full bg-pink-500 rounded-full transition-all duration-1000"
                    style={{ width: `${(timeLeft / 30) * 100}%` }}
                ></div>
            </div>


            {showOptions ? ( // Şıkları göster
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px]">
                    {question.options.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => handleClick(opt)}
                            className={`px-6 py-3 rounded-xl text-lg font-semibold border-2 transition duration-300 shadow-lg ${selected === opt
                                ? 'bg-pink-600 text-white scale-105'
                                : 'bg-white text-black hover:bg-pink-100 hover:text-black'
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            ) : (
                <p className="italic text-pink-300 text-lg">Şıklar birazdan görünecek...</p>
            )}
        </div>
    );
};

export default QuestionScreen;