import React, { useState } from 'react'; // Burada React ve useState'i import ediyoruz
import StartScreen from './components/startscreen'; // StartScreen bileşenini import ediyoruz
import QuestionScreen from './components/QuestionScreen'; // QuestionScreen bileşenini import ediyoruz
import ResultScreen from './components/resultscreen'; // ResultScreen bileşenini import ediyoruz
import questions from './data/questions'; // Soruları içeren data dosyasını import ediyoruz

const App = () => { // Ana App bileşenini tanımlıyoruz
    const [step, setStep] = useState('start'); // Başlangıç adımını 'start' olarak ayarlıyoruz
    const [currentIndex, setCurrentIndex] = useState(0); // Şu anki soru indeksini 0 olarak ayarlıyoruz
    const [answers, setAnswers] = useState([]); // Cevapları saklamak için bir dizi oluşturuyoruz

    const handleStart = () => setStep('quiz'); // Başlangıç butonuna tıklandığında adımı 'quiz' olarak değiştiriyoruz

    const handleAnswer = (answer) => { // Cevap verildiğinde bu fonksiyon çalışacak
        setAnswers([...answers, answer]); // Cevabı answers dizisine ekliyoruz
        if (currentIndex + 1 < questions.length) {  // Eğer daha fazla soru varsa
            setCurrentIndex(currentIndex + 1); // Soru indeksini bir artırıyoruz
        } else { // Eğer son sorudaysak
            setStep('result'); // Adımı 'result' olarak değiştiriyoruz
        }
    };

    // Burada şu anki adımı kontrol ediyoruz ve ona göre bileşeni render ediyoruz
    return (
        <div className="max-w-[1400px] mx-auto p-4 text-center">
            {step === 'start' && <StartScreen onStart={handleStart} />}
            {step === 'quiz' && (
                <QuestionScreen
                    question={questions[currentIndex]}
                    onAnswer={handleAnswer}
                    questionIndex={currentIndex + 1}
                    total={questions.length}
                />
            )}
            {step === 'result' && <ResultScreen answers={answers} questions={questions} />}
        </div>
    );
};

export default App;