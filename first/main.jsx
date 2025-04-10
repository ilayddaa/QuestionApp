// main.jsx
import React from 'react'; // React kütüphanesini import ediyoruz
import ReactDOM from 'react-dom/client'; // ReactDOM kütüphanesini import ediyoruz
import App from './app'; // App bileşenini import ediyoruz
import './index.css'; // CSS dosyasını import ediyoruz

ReactDOM.createRoot(document.getElementById('root')).render( // root elementini bulup render ediyoruz
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
