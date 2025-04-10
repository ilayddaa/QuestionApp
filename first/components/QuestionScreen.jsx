import React, { useEffect, useState } from 'react';

const QuestionScreen = ({ question, onAnswer, questionIndex, total }) => {
    const [timeLeft, setTimeLeft] = useState(30);
    const [showOptions, setShowOptions] = useState(false);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setTimeLeft(30);
        setShowOptions(false);
        setSelected(null);

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        const showOptionsTimeout = setTimeout(() => setShowOptions(true), 1000);

        const autoNextTimeout = setTimeout(() => {
            if (!selected) onAnswer(null);
        }, 30000);

        return () => {
            clearInterval(timer);
            clearTimeout(showOptionsTimeout);
            clearTimeout(autoNextTimeout);
        };
    }, [question]);

    const handleClick = (option) => {
        if (selected) return;
        setSelected(option);
        setTimeout(() => onAnswer(option), 500);
    };

    return (
        <div class="questions">
            <h2 className="text-xl mb-2 font-bold">Soru {questionIndex} / {total}</h2>
            <img src={question.media} alt="soru" className="photos w-[500px] h-[400px] object-cover mx-auto mb-4" />
            <p className="text-lg mb-4 text-white">{question.question}</p>
            <p className="mb-2 font-bold text-red-600">Kalan Süre: {timeLeft} saniye</p>
            {showOptions ? (
                <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto">
                    {question.options.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => handleClick(opt)}
                            className={`border px-4 py-2 rounded ${selected === opt ? 'bg-pink-500 text-white' : 'hover:bg-gray-100'
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            ) : (
                <p>Şıklar birazdan görünecek...</p>
            )}
        </div>
    );
};

export default QuestionScreen;