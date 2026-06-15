import { BarChart } from './components/ChartSection/BarChart';
import { ValueInfo } from './components/InputSection/ValueInfo';
import { ChartProvider } from './context/ChartProvider';

function App() {
  return (
    <div className="flex">
      <ChartProvider>
        <ValueInfo />
        <BarChart />
      </ChartProvider>
    </div>
  );
}

export default App;
