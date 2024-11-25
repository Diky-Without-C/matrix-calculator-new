import Matrix from "..";

export default function getSideDiagonal(matrix: Matrix) {
  if (matrix.type !== "square") return;

  const up = [];
  const down = [];

  for (let i = 0; i < matrix.row; i++) {
    for (let j = 0; j < matrix.col; j++) {
      if (i < j) {
        up.push(matrix.cell[i][j]);
      } else if (i > j) {
        down.push(matrix.cell[i][j]);
      }
    }
  }
  return { up, down };
}
