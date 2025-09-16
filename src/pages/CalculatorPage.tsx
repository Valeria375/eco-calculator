import React, { useState } from 'react';
import Calculator from '../components/Calculator/Calculator';
import Result from '../components/Result/Result';
import { CalculationResult } from '../ts/types';

const CalculatorPage: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = (calculationResult: CalculationResult) => {
    setResult(calculationResult);
  };

  return (
    <div>
      <div className="hero">
        <h2>Калькулятор углеродного следа</h2>
        <p>Узнайте, какой углеродный след оставляете вы и ваша семья, и получите персонализированные советы по его уменьшению.</p>
      </div>
      
      <Calculator onCalculate={handleCalculate} />
      
      {result && (
        <Result 
          carbonFootprint={result.carbonFootprint} 
          comparison={result.comparison}
          breakdown={result.breakdown}
        />
      )}
    </div>
  );
};

export default CalculatorPage;