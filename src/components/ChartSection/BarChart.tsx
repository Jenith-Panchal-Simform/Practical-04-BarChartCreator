import { useChartData } from '../../context/ChartContext';

export const BarChart = () => {
  const { chartData } = useChartData();
  const { axis, data } = chartData;

  const maxVal = data.length !== 0 ? Math.max(...data.map((item) => item.value)) : 0;

  const step = maxVal / 10;

  const arr = Array.from({ length: 11 }, (_, i) => {
    return (i * step).toFixed(2);
  });

  return (
    <main className="custom-scrollbar relative flex-9 overflow-x-auto pl-10">
      <h1 className="text-xl font-bold">Bar Chart</h1>
      <div
        className="absolute top-1/2 left-2 -translate-y-1/2 rotate-180 font-bold whitespace-nowrap"
        style={{
          writingMode: 'vertical-lr',
          textOrientation: 'mixed',
        }}
      >
        {axis.yAxisLabel}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bold whitespace-nowrap">
        {axis.xAxisLabel}
      </div>

      <div className="justify-betwen mx-5 my-2 flex h-[calc(100vh-80px)] items-end gap-2 border-b-2 border-l-2">
        <div className="item flex h-[calc(100vh-100px)] flex-col-reverse justify-between">
          {arr.map((item) => (
            <span>{item}</span>
          ))}
        </div>
        {data.map((item) => (
          <div
            key={item.title}
            className="flex h-[calc(100vh-100px)] flex-col-reverse items-center"
          >
            <div
              className="relative w-25 rounded-t bg-blue-500 transition-all duration-300 ease-out hover:bg-blue-600"
              style={{
                height: `${(item.value / maxVal) * 100}%`,
              }}
              title={`x:${item.title} y:${item.value}`}
            />
            <span className="absolute bottom-3 flex w-25 justify-center text-sm">
              {item.title.length > 5 ? item.title.slice(0, 3) : item.title}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};
