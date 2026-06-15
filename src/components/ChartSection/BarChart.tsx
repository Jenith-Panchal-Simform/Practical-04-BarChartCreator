const products = [
  { month: 'Jan', sales: 1200 },
  { month: 'Feb', sales: 1500 },
  { month: 'Mar', sales: 1800 },
  { month: 'Apr', sales: 1700 },
  { month: 'May', sales: 2100 },
  { month: 'Jun', sales: 2400 },
  { month: 'Jul', sales: 2200 },
  { month: 'Aug', sales: 2600 },
  { month: 'Sep', sales: 2800 },
  { month: 'Oct', sales: 3000 },
  { month: 'Nov', sales: 3250 },
  { month: 'Dec', sales: 3900 },
];
export const BarChart = () => {
  const maxSales = Math.max(...products.map((product) => product.sales));
  const numberOfLines = products.length;

  const step = Math.ceil(maxSales / numberOfLines);
  console.log(step);
  const arr = Array.from({ length: products.length }, (_, i) => {
    return i * step;
  });
  console.log(arr);
  return (
    <main className="relative flex-9 pl-10">
      <h1 className="text-xl font-bold">Bar Chart</h1>
      <div
        className="absolute top-1/2 left-2 -translate-y-1/2 rotate-180 font-bold whitespace-nowrap"
        style={{
          writingMode: 'vertical-lr',
          textOrientation: 'mixed',
        }}
      >
        Very Long Y Axis Laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-bold whitespace-nowrap">
        X
        Axisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>

      <div className="realtive mx-5 my-2 flex h-[calc(100vh-80px)] items-end gap-2 border-b-2 border-l-2">
        <div className="flex h-[calc(100vh-100px)] flex-col-reverse justify-between">
          {arr.map((item) => (
            <span>{item}</span>
          ))}
        </div>
        {products.map((product) => (
          <div
            key={product.month}
            className="flex h-[calc(100vh-100px)] flex-1 flex-col-reverse items-center"
          >
            <div
              className="w-full rounded-t bg-blue-500"
              style={{
                height: `${(product.sales / maxSales) * 100}%`,
              }}
            />
            <span className="absolute bottom-6 text-xs">{product.month.slice(0, 3)}</span>
          </div>
        ))}
      </div>
    </main>
  );
};
