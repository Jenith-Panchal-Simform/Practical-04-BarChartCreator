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
    <main className="relative flex-9 overflow-hidden pl-10">
      <h1 className="text-xl font-bold">Bar Chart</h1>

      {/* Y Axis Label */}
      <div
        className="absolute top-1/2 left-2 -translate-y-1/2 rotate-180 font-bold whitespace-nowrap"
        style={{
          writingMode: 'vertical-lr',
          textOrientation: 'mixed',
        }}
      >
        {axis.yAxisLabel}
      </div>

      {/* X Axis Label */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bold whitespace-nowrap">
        {axis.xAxisLabel}
      </div>

      <div className="flex w-full">
        {/* Y Axis Values */}
        <div className="flex h-[calc(100vh-100px)] flex-col-reverse justify-between pr-2">
          {arr.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        {/* Scrollable Chart Section */}
        <div className="custom-scrollbar w-full overflow-x-auto border-b-2 border-l-2 pl-2">
          <div className="min-w-max">
            {/* Chart Border Area */}
            <div className="flex h-[calc(100vh-90px)] items-end gap-2">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="relative flex h-full w-25 flex-col-reverse items-center"
                >
                  <div
                    className="w-full rounded-t bg-blue-500 transition-all duration-300 ease-out hover:bg-blue-600"
                    style={{
                      height: `${(item.value / maxVal) * 100}%`,
                    }}
                    title={`x:${item.title} y:${item.value}`}
                  />

                  <span className="flex justify-center text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            {/* X Axis Labels  */}
            <div className="mt-2 flex gap-2">
              {data.map((item, index) => (
                <div key={index} className="flex w-25 justify-center">
                  <span className="text-sm">
                    {item.title.length > 5 ? item.title.slice(0, 3) : item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
