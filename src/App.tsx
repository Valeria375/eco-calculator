import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SwitchTheme from './components/SwitchTheme/SwitchTheme';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import TipsPage from './pages/TipsPage';
import AuthPage from './pages/AuthPage';
import './scss/styles.scss';
import './css/index.css';
import './css/offcanvas.css';
import styles from './App.module.css'; // Импортируем стили

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const footprints = document.querySelectorAll('.footprint');
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
        if (footprints[index]) {
          footprints[index].classList.add(styles.visible);
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/tips" element={<TipsPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
        <SwitchTheme />
        <button 
          className={`${styles.scrollToTop} ${showScrollTop ? styles.visible : ''}`}
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          aria-label="Наверх"
        >
          ↑
        </button>
      </div>
    </Router>
  );
};

export default App;