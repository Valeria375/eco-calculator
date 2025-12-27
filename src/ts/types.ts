export interface CarbonData {
  transport: number;
  flight: number;
  diet: number;
  energy: number;
  electricity: number;
  shopping: number;
  steps: number;
  plasticBottles: number;
  waterUsage: number;
}

export interface CalculationResult {
  carbonFootprint: number;
  comparison: number;
  breakdown?: {
    transport: number;
    flight: number;
    diet: number;
    energy: number;
    electricity: number;
    shopping: number;
    steps: number;
    plasticBottles: number;
    waterUsage: number;
  };
}

export interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface User {
  id: string;
  name: string;
  email: string;
  carbonFootprintHistory: CalculationResult[];
}

export interface CalculatorProps {
  onCalculate: (result: CalculationResult) => void;
}

export interface ResultProps {
  carbonFootprint: number;
  comparison: number;
  breakdown?: {
    transport: number;
    flight: number;
    diet: number;
    energy: number;
    electricity: number;
    shopping: number;
    steps: number;
    plasticBottles: number;
    waterUsage: number;
  };
  onNewCalculation?: () => void; // Добавляем опциональный пропс
}