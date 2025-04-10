import React from 'react';

const StartScreen = ({ onStart }) => {
    return (
        <div class="mt-20">
            <h1 className="text-3xl mb-4 text-pink-900"><strong class="font-bolds text-pink-700">0MantıkSoru</strong>'ya Hoş Geldin ✍🏻</h1>
            <p className="mb-4 font-bold italic text-white text-2xl">Toplam 10 sorudan oluşan bu testte, her soruya 30 saniyen olacak. 📢</p>
            <button
                onClick={onStart}
                className="bg-white text-pink-900 px-6 py-2 rounded hover:bg-pink-400 font-bold"
            >
                Hazırsan Tıklama
            </button>
            <img src="https://i.pinimg.com/originals/cc/c6/e3/ccc6e3bc31d919750502a7563176f1a0.gif" alt="köpek" class="startdog" />
            <p class="kopek">“Gölgeyi kovalayan suya atlamayı göze almalı.”</p>

        </div>
    );
};
export default StartScreen;
