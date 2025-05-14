import React from 'react';

const StartScreen = ({ onStart }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="relative bg-cover bg-center p-12 rounded-xl max-w-lg w-full"
                style={{
                    backgroundImage: 'url(https://imgcdn.stablediffusionweb.com/2024/5/28/181e0f66-b502-47b2-a0e5-20cf8653214a.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height: '400px', // Kutunun yüksekliğini belirler
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight">
                        Mantık Yarışması
                    </h1>

                    <p className="text-lg sm:text-xl mb-8 leading-relaxed">
                        <span className="text-pink-300 font-semibold">10 sorudan</span> oluşan bu testte,<br />
                        her soruya <span className="text-pink-300 font-bold">30 saniyen</span> olacak.<br />
                        Hazırsan, zihin savaşını başlat!
                    </p>

                    <button
                        onClick={onStart}
                        className="bg-pink-300 hover:bg-pink-400 text-black px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        YARIŞMAYA BAŞLA
                    </button>
                </div>
            </div>

            <p className="mt-12 text-sm sm:text-base text-gray-400 italic">
                “Zihnini test et, kazanan sen ol.”
            </p>
        </div>
    );
};

export default StartScreen;