import React, { useState } from 'react';
import { CarbonData, CalculationResult } from '../../ts/types';
import styles from './Calculator.module.css';

interface CalculatorProps {
  onCalculate: (result: CalculationResult) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState<CarbonData>({
    transport: 0,
    flight: 0,
    diet: 0,
    energy: 0,
    electricity: 0,
    shopping: 0,
    steps: 0,
    plasticBottles: 0,
    waterUsage: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: parseInt(value) || 0
    }));
  };

  const calculateFootprint = () => {
    // Базовый расчет
    let carbonFootprint = (formData.transport * 1.2) + 
                         (formData.flight * 0.8) + 
                         (formData.diet * 0.7) + 
                         (formData.energy * 0.9);
    
    // Новые факторы
    carbonFootprint += formData.electricity * 0.5;
    carbonFootprint += formData.shopping * 0.3;
    carbonFootprint -= formData.steps * 0.001;
    carbonFootprint -= formData.plasticBottles * 0.2;
    carbonFootprint += formData.waterUsage * 0.1;
    
    // Минимальное значение 0
    carbonFootprint = Math.max(0, carbonFootprint);
    
    const result: CalculationResult = {
      carbonFootprint: parseFloat(carbonFootprint.toFixed(1)),
      comparison: 4.8,
      breakdown: {
        transport: formData.transport * 1.2,
        flight: formData.flight * 0.8,
        diet: formData.diet * 0.7,
        energy: formData.energy * 0.9,
        electricity: formData.electricity * 0.5,
        shopping: formData.shopping * 0.3,
        steps: formData.steps * -0.001,
        plasticBottles: formData.plasticBottles * -0.2,
        waterUsage: formData.waterUsage * 0.1
      }
    };
    
    onCalculate(result);
  };

  return (
    <div className={styles.calculator}>
      <h3>Транспорт и путешествия</h3>
      
      <div className={styles.formGroup}>
        <label htmlFor="transport">Как часто вы пользуетесь автомобилем?</label>
        <select 
          id="transport" 
          value={formData.transport} 
          onChange={handleChange}
        >
          <option value="0">Не пользуюсь автомобилем</option>
          <option value="1">Редко (1-2 раза в неделю)</option>
          <option value="2">Иногда (3-4 раза в неделю)</option>
          <option value="3">Часто (каждый день)</option>
        </select>
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="flight">Как часто вы летаете на самолете?</label>
        <select 
          id="flight" 
          value={formData.flight} 
          onChange={handleChange}
        >
          <option value="0">Никогда</option>
          <option value="1">Редко (1 раз в год)</option>
          <option value="2">Иногда (2-3 раза в год)</option>
          <option value="3">Часто (более 4 раз в год)</option>
        </select>
      </div>
      
      <h3>Питание и образ жизни</h3>
      
      <div className={styles.formGroup}>
        <label htmlFor="diet">Какой у вас тип питания?</label>
        <select 
          id="diet" 
          value={formData.diet} 
          onChange={handleChange}
        >
          <option value="0">Веганское</option>
          <option value="1">Вегетарианское</option>
          <option value="2">Смешанное с преобладанием растительной пищи</option>
          <option value="3">Смешанное с преобладанием мяса</option>
        </select>
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="steps">Среднее количество шагов в день:</label>
        <input
          type="number"
          id="steps"
          value={formData.steps}
          onChange={handleChange}
          min="0"
          placeholder="Например: 8000"
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="plasticBottles">Сколько пластиковых бутылок сдаете на переработку в месяц?</label>
        <input
          type="number"
          id="plasticBottles"
          value={formData.plasticBottles}
          onChange={handleChange}
          min="0"
          placeholder="Например: 10"
        />
      </div>
      
      <h3>Энергия и ресурсы</h3>
      
      <div className={styles.formGroup}>
        <label htmlFor="energy">Используете ли вы возобновляемые источники энергии?</label>
        <select 
          id="energy" 
          value={formData.energy} 
          onChange={handleChange}
        >
          <option value="0">Да, полностью</option>
          <option value="1">Частично</option>
          <option value="2">Нет</option>
          <option value="3">Не знаю</option>
        </select>
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="electricity">Потребление электроэнергии (кВт⋅ч в месяц):</label>
        <input
          type="number"
          id="electricity"
          value={formData.electricity}
          onChange={handleChange}
          min="0"
          placeholder="Например: 150"
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="shopping">Покупка новых вещей (шт. в месяц):</label>
        <input
          type="number"
          id="shopping"
          value={formData.shopping}
          onChange={handleChange}
          min="0"
          placeholder="Одежда, электроника и т.д."
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="waterUsage">Потребление воды (м³ в месяц):</label>
        <input
          type="number"
          id="waterUsage"
          value={formData.waterUsage}
          onChange={handleChange}
          min="0"
          step="0.1"
          placeholder="Например: 4.5"
        />
      </div>
      
      <button className={styles.calculateBtn} onClick={calculateFootprint}>
        Рассчитать мой углеродный след
      </button>
    </div>
  );
};

export default Calculator;