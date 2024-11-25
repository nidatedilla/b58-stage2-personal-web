import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    const [name] = useState('Nida Tedilla Manuar');
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcomeMessage(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Header />
            <main className="container mx-auto p-6 flex-grow">
                {showWelcomeMessage && (
                    <div className="bg-green-200 text-green-800 p-4 rounded text-center mb-4">
                        Selamat datang di personal web saya!
                    </div>
                )}
                <About name={name} />
            </main>
            <Footer />
        </div>
    );
}

export default App;