import { createContext, useContext, type Dispatch } from 'react';
import type { ChartAction, ChartData } from './ChartProvider';

export type BarChartData = {
  title: string;
  value: number;
};

export type ChartContextType = {
  chartData: ChartData;
  dispatch: Dispatch<ChartAction>;
};
export const ChartContext = createContext<ChartContextType | undefined>(undefined);

export const useChartData = () => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error('useChartData must be used within ChartProvider');
  }

  return context;
};
