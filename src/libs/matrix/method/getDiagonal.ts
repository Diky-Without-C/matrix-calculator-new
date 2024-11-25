import Matrix from "..";

export default function getDiagonal(matrix: Matrix) {
  if (matrix.type !== "square") return;

  return {
    main: matrix.cell.map((cell, i) => cell[i]),
    side: matrix.cell.map((cell, i) => cell[matrix.row - i - 1]).reverse(),
  };
}
