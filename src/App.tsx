import React from 'react';
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

const App: React.FC = () => {
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
      </div>
    </Router>
  );
};

export default App;