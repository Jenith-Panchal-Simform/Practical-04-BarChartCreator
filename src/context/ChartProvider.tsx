import { useReducer, type ReactNode } from 'react';
import { ChartContext, type BarChartData } from './ChartContext';

type ChartProviderProps = {
  children: ReactNode;
};
export type ChartData = {
  xAxisLabel: string | null;
  yAxisLabel: string | null;
  data: BarChartData[];
};

export type ChartAction =
  | {
      type: 'SET_X_AXIS';
      payload: string;
    }
  | {
      type: 'SET_Y_AXIS';
      payload: string;
    }
  | {
      type: 'SET_DATA';
      payload: BarChartData[];
    };
function reducer(state: ChartData, action: ChartAction): ChartData {
  switch (action.type) {
    case 'SET_X_AXIS':
      return {
        ...state,
        xAxisLabel: action.payload,
      };

    case 'SET_Y_AXIS':
      return {
        ...state,
        yAxisLabel: action.payload,
      };

    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
const initialState: ChartData = {
  xAxisLabel: null,
  yAxisLabel: null,
  data: [],
};

export const ChartProvider = ({ children }: ChartProviderProps) => {
  const [chartData, dispatch] = useReducer(reducer, initialState);

  return <ChartContext.Provider value={{ chartData, dispatch }}>{children}</ChartContext.Provider>;
};
