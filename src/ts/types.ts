export interface CarbonData {
  transport: number;
  flight: number;
  diet: number;
  energy: number;
  steps: number;
  plasticBottles: number;
  electricity: number;
  waterUsage: number;
}

export interface CalculationResult {
  carbonFootprint: number;
  comparison: number;
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