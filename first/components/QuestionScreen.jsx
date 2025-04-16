import React, { useEffect, useState } from "react"; // React ve useEffect, useState kütüphanelerini içe aktarıyoruz

//Burada soruların ve cevapların olduğu bir bileşen oluşturuyoruz
const QuestionScreen = ({ question, onAnswer, questionIndex, total }) => {
    const [timeLeft, setTimeLeft] = useState(30); // Başlangıçta 30 saniye süre
    const [showOptions, setShowOptions] = useState(false); // Şıkları gösterip göstermeyeceğimizi kontrol eden state
    const [selected, setSelected] = useState(null); // Seçilen şıkkı tutan state

    // useEffect, bileşen yüklendiğinde ve question değiştiğinde çalışacak
    useEffect(() => {
        setTimeLeft(30); // Her yeni soru geldiğinde süreyi sıfırla
        setShowOptions(false); // Şıkları gizle
        setSelected(null); // Seçimi sıfırla

        // 30 saniye geri sayım başlat
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    if (!selected) {
                        onAnswer(null); // Süre bitince otomatik geç
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // Şıkları 4 saniye sonra göster
        const showOptionsTimeout = setTimeout(() => setShowOptions(true), 4000);

        // Temizlik fonksiyonu: bileşen unmount olduğunda veya question değiştiğinde çalışır
        return () => {
            clearInterval(timer);
            clearTimeout(showOptionsTimeout);
        };
    }, [question]);

    // Şık tıklama fonksiyonu
    const handleClick = (option) => {
        if (selected) return;
        setSelected(option);

        setTimeout(() => {
            onAnswer(option);
        }, 1500); // Doğru şık gösterildikten sonra geçiş
    };

    // Buton sınıfını belirleyen fonksiyon
    const getButtonClass = (opt) => {
        if (!selected) {
            return "bg-white text-black hover:bg-pink-100";
        }

        if (opt === question.correctAnswer) {
            return "bg-green-600 text-white scale-105"; // ✅ Doğru şık
        }

        if (opt === selected && opt !== question.correctAnswer) {
            return "bg-red-600 text-white scale-105"; // ❌ Seçilen ama yanlış şık
        }

        return "bg-gray-300 text-black opacity-70"; // Diğerleri
    };

    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-start px-6 py-10">
            <h2 className="text-2xl font-extrabold mb-6 tracking-wide animate-pulse">
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

            {showOptions ? (
                // Şıkları göster
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px]">
                    {question.options.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => handleClick(opt)}
                            disabled={!!selected}
                            className={`px-6 py-3 rounded-xl text-lg font-semibold border-2 transition duration-300 shadow-lg ${getButtonClass(
                                opt
                            )}`}
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