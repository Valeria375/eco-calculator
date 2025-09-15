import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.earth}>🌍</div>
      <p>Eco-Calculator: Персональный Ассистент по Углеродному Следу</p>
      <p>© 2023 Сделано с заботой о планете</p>
    </footer>
  );
};

export default Footer;
