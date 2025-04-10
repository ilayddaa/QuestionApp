import React, { useEffect, useState } from 'react'; // React kütüphanesini içe aktarıyoruz

// QuestionScreen bileşeni, bir sorunun ekranını temsil eder. Bu bileşen, soruyu, cevap seçeneklerini ve kalan süreyi gösterir.
const QuestionScreen = ({ question, onAnswer, questionIndex, total }) => {
    const [timeLeft, setTimeLeft] = useState(30); // Başlangıçta 30 saniye süre var
    const [showOptions, setShowOptions] = useState(false); // Başlangıçta seçenekler gizli
    const [selected, setSelected] = useState(null); // Başlangıçta hiçbir seçenek seçilmemiş

    // useEffect, bileşen yüklendiğinde ve question değiştiğinde çalışır.
    useEffect(() => {
        setTimeLeft(30); // Süreyi 30 saniyeye sıfırla
        setShowOptions(false); // Seçenekleri gizle
        setSelected(null); // Seçimi sıfırla

        // 4 saniye sonra seçenekleri göster
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1); // Kalan süreyi bir azalt
        }, 4000);

        const showOptionsTimeout = setTimeout(() => setShowOptions(true), 1000); // Seçenekleri 1 saniye sonra göster

        // 30 saniye sonra otomatik olarak cevap ver
        const autoNextTimeout = setTimeout(() => {
            if (!selected) onAnswer(null);
        }, 30000);

        // Temizleme fonksiyonu, bileşen unmount edildiğinde veya question değiştiğinde çalışır.
        return () => {
            clearInterval(timer); // Zamanlayıcıyı temizle
            clearTimeout(showOptionsTimeout); // Seçenek gösterme zamanlayıcısını temizle
            clearTimeout(autoNextTimeout); // Otomatik geçiş zamanlayıcısını temizle
        };
    }, [question]);

    // handleClick fonksiyonu, bir seçenek tıklandığında çalışır. Eğer zaten bir seçenek seçilmişse hiçbir şey yapmaz.
    const handleClick = (option) => {
        if (selected) return;
        setSelected(option);
        setTimeout(() => onAnswer(option), 500);
    };

    return (
        <div className="min-h-screen  text-white flex flex-col items-center justify-start px-6 py-10">
            <h2 className="text-2xl font-extrabold mb-6 text-white tracking-wide animate-pulse">
                🧠 Soru {questionIndex} / {total}
            </h2>

            <img
                src={question.media}
                alt="soru"
                className="rounded-xl shadow-xl w-full max-w-[700px] h-[350px] object-cover mb-6 border-4 border-pink-500"
            />

            <p className="text-xl font-semibold text-center mb-6 max-w-[800px] leading-relaxed">
                {question.question}
            </p>

            <p className="text-lg font-bold text-yellow-300 mb-6 animate-pulse">
                ⏳ Kalan Süre: {timeLeft} saniye
            </p>

            {showOptions ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px]">
                    {question.options.map((opt) => (
                        <button
                            key={opt} // Her seçenek için benzersiz bir anahtar
                            onClick={() => handleClick(opt)} // Seçenek tıklandığında handleClick fonksiyonunu çağır
                            className={`px-6 py-3 rounded-xl text-lg font-semibold border-2 transition duration-300 shadow-lg ${selected === opt // Seçenek seçilmişse. Semibold: Kalın yazı tipi 
                                ? 'bg-pink-600 text-white scale-105' // Seçenek seçildiğinde. Scale: Büyütme efekti
                                : 'bg-white text-black hover:bg-pink-100 hover:text-black' // Seçenek seçilmediğinde
                                }`} // ? soru işareti burada ternary operatörünü temsil eder. Ternary operatörü, bir koşula bağlı olarak iki farklı değeri döndürür.
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
}

export default QuestionScreen;