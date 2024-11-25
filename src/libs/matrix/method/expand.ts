import Matrix from "..";

function getMinor(cell: number[][], row: number, col: number) {
  return cell
    .filter((_, i) => i !== row)
    .map((r) => r.filter((_, j) => j !== col));
}

export default function expand(matrix: Matrix) {
  const cofactorMatrix: number[][] = [];

  for (let i = 0; i < matrix.row; i++) {
    const cofactorRow: number[] = [];

    for (let j = 0; j < matrix.col; j++) {
      const minor = getMinor(matrix.cell, i, j);
      const det = new Matrix(minor).determinant();
      const sign = (i + j) % 2 === 0 ? 1 : -1;

      cofactorRow.push(sign * det);
    }

    cofactorMatrix.push(cofactorRow);
  }

  return new Matrix(cofactorMatrix);
}
