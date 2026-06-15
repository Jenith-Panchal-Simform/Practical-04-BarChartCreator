import { BarChart } from './components/ChartSection/BarChart';
import { ValueInfo } from './components/InputSection/ValueInfo';

function App() {
  return (
    <div className="flex">
      <ValueInfo />
      <BarChart />
    </div>
  );
}

export default App;
