import React from 'react';
import { ResultProps } from '../../ts/types';
import styles from './Result.module.css';

const Result: React.FC<ResultProps> = ({ carbonFootprint, comparison, breakdown }) => {
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
      
      {breakdown && (
        <div className={styles.breakdown}>
          <h4>Детализация:</h4>
          <div className={styles.breakdownGrid}>
            <div className={styles.breakdownItem}>
              <span>Транспорт:</span>
              <span>{breakdown.transport.toFixed(1)} т</span>
            </div>
            <div className={styles.breakdownItem}>
              <span>Перелеты:</span>
              <span>{breakdown.flight.toFixed(1)} т</span>
            </div>
            <div className={styles.breakdownItem}>
              <span>Питание:</span>
              <span>{breakdown.diet.toFixed(1)} т</span>
            </div>
            <div className={styles.breakdownItem}>
              <span>Энергия:</span>
              <span>{breakdown.energy.toFixed(1)} т</span>
            </div>
            <div className={styles.breakdownItem}>
              <span>Электричество:</span>
              <span>{breakdown.electricity.toFixed(1)} т</span>
            </div>
            <div className={styles.breakdownItem}>
              <span>Покупки:</span>
              <span>{breakdown.shopping.toFixed(1)} т</span>
            </div>
            {breakdown.steps < 0 && (
              <div className={styles.breakdownItemPositive}>
                <span>Ходьба:</span>
                <span>{breakdown.steps.toFixed(1)} т</span>
              </div>
            )}
            {breakdown.plasticBottles < 0 && (
              <div className={styles.breakdownItemPositive}>
                <span>Переработка:</span>
                <span>{breakdown.plasticBottles.toFixed(1)} т</span>
              </div>
            )}
            <div className={styles.breakdownItem}>
              <span>Вода:</span>
              <span>{breakdown.waterUsage.toFixed(1)} т</span>
            </div>
          </div>
        </div>
      )}
      
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