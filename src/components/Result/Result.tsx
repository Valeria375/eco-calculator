import React from 'react';
import styles from './Result.module.css';

interface ResultProps {
  carbonFootprint: number;
  comparison: number;
}

const Result: React.FC<ResultProps> = ({ carbonFootprint, comparison }) => {
  return (
    <div className={styles.result}>
      <h3>Ваш углеродный след составляет:</h3>
      <div className={styles.carbonValue}>{carbonFootprint} тонн CO2/год</div>
      <p>Средний мировой показатель: {comparison} тонн CO2/год на человека</p>
      
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${Math.min(100, (carbonFootprint / 10) * 100)}%` }}
        ></div>
      </div>
      
      <div className={styles.shareButtons}>
        <button className={`${styles.shareBtn} ${styles.facebook}`}>
          <i className="fab fa-facebook-f"></i> Поделиться
        </button>
        <button className={`${styles.shareBtn} ${styles.twitter}`}>
          <i className="fab fa-twitter"></i> Твитнуть
        </button>
        <button className={`${styles.shareBtn} ${styles.copy}`}>
          <i className="fas fa-copy"></i> Копировать ссылку
        </button>
      </div>
    </div>
  );
};

export default Result;
