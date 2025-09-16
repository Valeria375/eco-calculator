import React, { useEffect, useState } from 'react';
import styles from './SwitchTheme.module.css';

const SwitchTheme: React.FC = () => {
  const [theme, setThemeState] = useState('light');

  const applyTheme = (newTheme: string) => {
    document.documentElement.setAttribute('data-theme', newTheme);
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
  }, []);

  return (
    <div className={styles.themeSwitch}>
      <button
        className={styles.themeBtn}
        onClick={() => applyTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label="Переключить тему"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default SwitchTheme;