import { useReducer, type ReactNode } from 'react';
import { ChartContext, type BarChartData } from './ChartContext';

type ChartProviderProps = {
  children: ReactNode;
};
export type ChartData = {
  axis: {
    xAxisLabel: string | null;
    yAxisLabel: string | null;
  };
  data: BarChartData[];
};

export type ChartAction =
  | {
      type: 'SET_AXIS';
      payload: {
        xAxisLabel: string;
        yAxisLabel: string;
      };
    }
  | {
      type: 'SET_DATA';
      payload: BarChartData;
    };
function reducer(state: ChartData, action: ChartAction): ChartData {
  switch (action.type) {
    case 'SET_AXIS':
      return {
        ...state,
        axis: {
          xAxisLabel: action.payload.xAxisLabel,
          yAxisLabel: action.payload.xAxisLabel,
        },
      };

    case 'SET_DATA':
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
}
const initialState: ChartData = {
  axis: { xAxisLabel: null, yAxisLabel: null },
  data: [],
};

export const ChartProvider = ({ children }: ChartProviderProps) => {
  const [chartData, dispatch] = useReducer(reducer, initialState);

  return <ChartContext.Provider value={{ chartData, dispatch }}>{children}</ChartContext.Provider>;
};
