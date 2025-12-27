import React, { useState } from 'react';
import Calculator from '../components/Calculator/Calculator';
import Result from '../components/Result/Result';
import { CalculationResult } from '../ts/types';

const CalculatorPage: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showCalculator, setShowCalculator] = useState(true);
  const handleCalculate = (calculationResult: CalculationResult) => {
    setResult(calculationResult);
    setShowCalculator(false);
  };
   const handleNewCalculation = () => {
    setResult(null);
    setShowCalculator(true);
  };

  return (
    <div>
      <div className="hero">
        <h2>Калькулятор углеродного следа</h2>
        <p>Узнайте, какой углеродный след оставляете вы и ваша семья, и получите персонализированные советы по его уменьшению.</p>
      </div>
      
     {showCalculator ? (
        <Calculator onCalculate={handleCalculate} />
      ) : (
        <div>
          <Result 
            carbonFootprint={result!.carbonFootprint} 
            comparison={result!.comparison}
            breakdown={result!.breakdown}
          />
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              onClick={handleNewCalculation}
              style={{
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }}
            >
              🔄 Сделать новый расчет
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorPage;