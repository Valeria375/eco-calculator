import React, { useState } from 'react';
import { CarbonData, CalculationResult } from '../../ts/types';
import styles from './Calculator.module.css';

interface CalculatorProps {
  onCalculate: (result: CalculationResult) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onCalculate }) => {
  const [currentStep, setCurrentStep] = useState(0);
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

  const questions = [
    {
      title: "Транспорт",
      question: "Сколько километров вы проехали сегодня на машине?",
      field: "transport",
      type: "number",
      placeholder: "0 км",
      icon: "🚗"
    },
    {
      title: "Путешествия",
      question: "Летали ли вы на самолете за последний месяц?",
      field: "flight",
      type: "select",
      options: [
        { value: 0, label: "Нет" },
        { value: 1, label: "1 короткий перелет" },
        { value: 2, label: "2-3 перелета" },
        { value: 3, label: "Много перелетов" }
      ],
      icon: "✈️"
    },
    {
      title: "Питание",
      question: "Какой тип питания преобладал сегодня?",
      field: "diet",
      type: "select",
      options: [
        { value: 0, label: "Веганское" },
        { value: 1, label: "Вегетарианское" },
        { value: 2, label: "Смешанное (преимущественно растительное)" },
        { value: 3, label: "Мясное" }
      ],
      icon: "🍽️"
    },
    {
      title: "Энергия",
      question: "Используете ли вы возобновляемую энергию?",
      field: "energy",
      type: "select",
      options: [
        { value: 0, label: "Да, полностью" },
        { value: 1, label: "Частично" },
        { value: 2, label: "Нет" },
        { value: 3, label: "Не знаю" }
      ],
      icon: "💡"
    },
    {
      title: "Электричество",
      question: "Сколько кВт·ч электроэнергии израсходовали сегодня?",
      field: "electricity",
      type: "number",
      placeholder: "0 кВт·ч",
      icon: "⚡"
    },
    {
      title: "Покупки",
      question: "Сколько новых вещей приобрели сегодня?",
      field: "shopping",
      type: "number",
      placeholder: "0 шт",
      icon: "🛒"
    },
    {
      title: "Шаги",
      question: "Сколько шагов прошли сегодня?",
      field: "steps",
      type: "number",
      placeholder: "0 шагов",
      icon: "🚶"
    },
    {
      title: "Переработка",
      question: "Сколько пластиковых бутылок сдали на переработку?",
      field: "plasticBottles",
      type: "number",
      placeholder: "0 шт",
      icon: "♻️"
    },
    {
      title: "Вода",
      question: "Сколько литров воды использовали сегодня?",
      field: "waterUsage",
      type: "number",
      placeholder: "0 л",
      icon: "💧"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateFootprint = () => {
    // Расчет углеродного следа
    const breakdown = {
      transport: formData.transport * 0.2, // 0.2 кг CO2 на км
      flight: formData.flight * 10, // 10 кг CO2 за перелет
      diet: formData.diet * 2, // 2 кг CO2 за тип питания
      energy: formData.energy * 1.5, // 1.5 кг CO2 за тип энергии
      electricity: formData.electricity * 0.5, // 0.5 кг CO2 за кВт·ч
      shopping: formData.shopping * 3, // 3 кг CO2 за вещь
      steps: formData.steps * -0.0001, // -0.0001 кг CO2 за шаг
      plasticBottles: formData.plasticBottles * -0.1, // -0.1 кг CO2 за бутылку
      waterUsage: formData.waterUsage * 0.002 // 0.002 кг CO2 за литр
    };

    const carbonFootprint = Object.values(breakdown).reduce((sum, value) => sum + value, 0);
    
    const result: CalculationResult = {
      carbonFootprint: parseFloat(Math.max(0, carbonFootprint).toFixed(2)),
      comparison: 4.8,
      breakdown
    };
    
    onCalculate(result);
  };

  const currentQuestion = questions[currentStep];

  return (
    <div className={styles.calculator}>
      <div className={styles.progress}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
        ></div>
        <div className={styles.progressText}>
          Шаг {currentStep + 1} из {questions.length}
        </div>
      </div>

      <div className={styles.questionCard}>
        <div className={styles.questionHeader}>
          <span className={styles.questionIcon}>{currentQuestion.icon}</span>
          <h3>{currentQuestion.title}</h3>
        </div>
        
        <div className={styles.questionContent}>
          <p className={styles.questionText}>{currentQuestion.question}</p>
          
          {currentQuestion.type === 'number' ? (
            <div className={styles.inputGroup}>
              <input
                type="number"
                name={currentQuestion.field}
                value={formData[currentQuestion.field as keyof CarbonData]}
                onChange={handleChange}
                placeholder={currentQuestion.placeholder}
                className={styles.numberInput}
                min="0"
              />
            </div>
          ) : (
            <div className={styles.optionsGrid}>
              {currentQuestion.options?.map((option, index) => (
                <label key={index} className={styles.optionLabel}>
                  <input
                    type="radio"
                    name={currentQuestion.field}
                    value={option.value}
                    checked={formData[currentQuestion.field as keyof CarbonData] === option.value}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.optionText}>{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className={styles.navigation}>
          <button 
            onClick={prevStep} 
            disabled={currentStep === 0}
            className={styles.navButton}
          >
            ← Назад
          </button>
          
          {currentStep < questions.length - 1 ? (
            <button onClick={nextStep} className={styles.navButton}>
              Далее →
            </button>
          ) : (
            <button onClick={calculateFootprint} className={styles.calculateButton}>
              📊 Рассчитать результат
            </button>
          )}
        </div>
      </div>

      <div className={styles.tips}>
        <h4>💡 Советы для уменьшения следа:</h4>
        <ul>
          {currentStep === 0 && <li>Ходите пешком или используйте велосипед для коротких расстояний</li>}
          {currentStep === 1 && <li>Выбирайте прямые рейсы и эконом-класс для меньшего расхода топлива</li>}
          {currentStep === 2 && <li>Увеличьте долю растительной пищи в рационе</li>}
          {currentStep === 3 && <li>Рассмотрите возможность установки солнечных панелей</li>}
          {currentStep === 4 && <li>Используйте энергосберегающие лампы и приборы</li>}
          {currentStep === 5 && <li>Покупайте только необходимое и выбирайте качественные вещи</li>}
          {currentStep === 6 && <li>Старайтесь проходить 8000-10000 шагов в день</li>}
          {currentStep === 7 && <li>Сортируйте мусор и сдавайте на переработку</li>}
          {currentStep === 8 && <li>Принимайте короткий душ вместо ванны</li>}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;