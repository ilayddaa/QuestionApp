import React from 'react'; // Burada React kütüphanesini içe aktarıyoruz

// StartScreen bileşeni, başlangıç ekranını temsil eder. Bu bileşen, kullanıcıdan testin başlaması için bir tıklama bekler.
const StartScreen = ({ onStart }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-white mb-6 -tracking-tight animate-bounce">
                    <span className="text-pink-800">🎀 0MantıkSoru</span>’ya Hoş Geldin 🎀
                </h1>

                <p className="text-lg sm:text-xl font-medium text-gray-300 mb-8 leading-relaxed">
                    Toplam <span className="text-pink-400 font-bold">10 sorudan</span> oluşan bu testte,<br />
                    her soruya sadece <span className="text-yellow-300 font-bold">30 saniyen</span> olacak! 📢
                </p>

                <button
                    onClick={onStart}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl shadow-md font-bold text-lg transition duration-300"
                >
                    Hazırsan Başlayalım!
                </button>
            </div>

            <img
                src="https://media.tenor.com/4YDZfwNpjwAAAAAM/pogled-pas.gif"
                alt="dog"
                className="w-[200px] h-[200px] mt-12 rounded-xl shadow-lg border border-pink-400"
            />

            <p className="mt-4 italic text-pink-300 text-center text-sm sm:text-base">
                “Gölgeyi kovalayan suya atlamayı göze almalı.”
            </p>
        </div>
    );
};
export default StartScreen; // Bileşeni dışa aktarıyoruz, böylece başka dosyalarda kullanılabilir hale geliyor. Bu bileşen, başlangıç ekranını temsil eder ve kullanıcıdan testin başlaması için bir tıklama bekler.
