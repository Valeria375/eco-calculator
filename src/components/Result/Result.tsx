import React from 'react';
import { ResultProps } from '../../ts/types';
import styles from './Result.module.css';

const Result: React.FC<ResultProps> = ({ carbonFootprint, comparison, breakdown, onNewCalculation }) => {
  if (!breakdown) return null;

  // Подготовка данных для диаграммы
  const chartData = [
    { category: 'Транспорт', value: Math.max(0, breakdown.transport), color: '#FF6B6B' },
    { category: 'Перелеты', value: Math.max(0, breakdown.flight), color: '#4ECDC4' },
    { category: 'Питание', value: Math.max(0, breakdown.diet), color: '#FFE66D' },
    { category: 'Энергия', value: Math.max(0, breakdown.energy), color: '#1A535C' },
    { category: 'Электричество', value: Math.max(0, breakdown.electricity), color: '#4CAF50' },
    { category: 'Покупки', value: Math.max(0, breakdown.shopping), color: '#2196F3' },
    { category: 'Вода', value: Math.max(0, breakdown.waterUsage), color: '#87CEEB' }
  ].filter(item => item.value > 0);

  const positiveImpact = [
    { category: 'Ходьба', value: Math.abs(breakdown.steps), color: '#6A0572' },
    { category: 'Переработка', value: Math.abs(breakdown.plasticBottles), color: '#AB83A1' }
  ].filter(item => item.value > 0);

  const maxValue = Math.max(...chartData.map(item => item.value), 10);

  return (
    <div className={styles.result}>
      <div className={styles.resultHeader}>
        <h2>📊 Ваш углеродный след за сегодня</h2>
        <div className={styles.totalScore}>
          <span className={styles.scoreValue}>{carbonFootprint} кг CO₂</span>
          <span className={styles.scoreLabel}>Общий след</span>
        </div>
      </div>

      <div className={styles.comparison}>
        <div className={styles.comparisonMeter}>
          <div className={styles.meterBar}>
            <div 
              className={styles.meterFill}
              style={{ width: `${Math.min(100, (carbonFootprint / 20) * 100)}%` }}
            ></div>
          </div>
          <div className={styles.meterLabels}>
            <span>0 кг</span>
            <span>20 кг</span>
          </div>
        </div>
        <p>Средний дневной показатель: {comparison.toFixed(1)} кг CO₂ на человека</p>
      </div>

      {chartData.length > 0 && (
        <div className={styles.chartSection}>
          <h3>📈 Распределение по категориям</h3>
          <div className={styles.chart}>
            {chartData.map((item, index) => (
              <div key={index} className={styles.chartItem}>
                <div className={styles.chartBarContainer}>
                  <div
                    className={styles.chartBar}
                    style={{
                      height: `${(item.value / maxValue) * 100}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
                <div className={styles.chartLabel}>
                  <span className={styles.chartValue}>{item.value.toFixed(1)} кг</span>
                  <span className={styles.chartCategory}>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {positiveImpact.length > 0 && (
        <div className={styles.positiveImpact}>
          <h3>🌱 Положительное влияние</h3>
          <div className={styles.impactGrid}>
            {positiveImpact.map((item, index) => (
              <div key={index} className={styles.impactItem}>
                <div className={styles.impactIcon}>✅</div>
                <div className={styles.impactContent}>
                  <h4>{item.category}</h4>
                  <p>Сэкономлено: {item.value.toFixed(1)} кг CO₂</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.recommendations}>
        <h3>💡 Рекомендации по улучшению</h3>
        <div className={styles.recommendationList}>
          {breakdown.transport > 5 && (
            <div className={styles.recommendationItem}>
              <span>🚗</span>
              <p>Используйте общественный транспорт или каршеринг для поездок</p>
            </div>
          )}
          {breakdown.electricity > 3 && (
            <div className={styles.recommendationItem}>
              <span>💡</span>
              <p>Выключайте свет и электроприборы, когда не используете их</p>
            </div>
          )}
          {breakdown.waterUsage > 100 && (
            <div className={styles.recommendationItem}>
              <span>💧</span>
              <p>Принимайте душ короче и используйте водосберегающие насадки</p>
            </div>
          )}
          {breakdown.shopping > 2 && (
            <div className={styles.recommendationItem}>
              <span>🛒</span>
              <p>Покупайте только необходимое и выбирайте качественные вещи</p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.saveButton}>💾 Сохранить результат</button>
        <button className={styles.shareButton}>📤 Поделиться</button>
        {onNewCalculation && (
          <button 
            className={styles.newCalculationButton}
            onClick={onNewCalculation}
          >
            🔄 Новый расчет
          </button>
        )}
      </div>

      <div className={styles.historyPrompt}>
        <p>Хотите отслеживать свой прогресс? Сохраняйте результаты каждый день!</p>
        <button className={styles.historyButton}>📅 Открыть историю</button>
      </div>
    </div>
  );
};

export default Result;