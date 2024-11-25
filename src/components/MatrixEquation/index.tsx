import Matrix from "../../libs/matrix";
import formatNumber from "./utils/formatNumber";

interface MatrixEquationProps {
  matrix: Matrix;
}

export default function MatrixEquation({ matrix }: MatrixEquationProps) {
  const cell = matrix.cell.map((row) => row.map((col) => formatNumber(col)));

  return (
    <section
      style={{
        height: `${(matrix.row + 1) * 2}rem`,
        width: `${(matrix.col + 1) * 2}rem`,
      }}
      className={`relative m-2 flex flex-col items-center justify-center border-gray-700 before:absolute before:right-0 before:h-full before:w-4 before:scale-95 before:border-y before:border-r before:border-inherit after:absolute after:left-0 after:h-full after:w-4 after:scale-95 after:border-y after:border-l after:border-inherit`}
    >
      {/* <div className="absolute bottom-full">{matrix.identity}</div> */}
      {cell.map((row, i) => {
        return (
          <div
            key={i}
            style={{ height: `${100 / matrix.row}%` }}
            className={`relative flex w-full items-center justify-center`}
          >
            {row.map((col, j) => {
              return (
                <div
                  key={j}
                  style={{ width: `${100 / matrix.col}%` }}
                  className={`flex h-full items-center justify-center`}
                >
                  {col}
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
