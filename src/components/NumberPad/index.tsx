const elements = [
  {
    symbol: "AC",
  },
  {
    symbol: "<=",
  },
  {
    symbol: "?",
  },
  {
    symbol: "?",
  },
  {
    symbol: "1",
  },
  {
    symbol: "2",
  },
  {
    symbol: "3",
  },
  {
    symbol: "+",
  },
  {
    symbol: "4",
  },
  {
    symbol: "5",
  },
  {
    symbol: "6",
  },
  {
    symbol: "-",
  },
  {
    symbol: "7",
  },
  {
    symbol: "8",
  },
  {
    symbol: "9",
  },
  {
    symbol: "*",
  },
  {
    symbol: ",",
  },
  {
    symbol: "0",
    style: "w-32",
  },
  {
    symbol: "X^-1",
    style: "text-md",
  },
];

export default function NumberPad() {
  return (
    <section className="flex w-80 flex-wrap items-center justify-center gap-1 border">
      {elements.map((element) => {
        return (
          <div
            className={`${element.style} flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 font-mono font-bold text-white`}
          >
            {element.symbol}
          </div>
        );
      })}
    </section>
  );
}
