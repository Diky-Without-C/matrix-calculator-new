import Matrix from "..";

export default function identify(matrix: Matrix) {
  if (matrix.cell.flat().every((cell) => cell === 0)) {
    return "Matrix Zero";
  }

  if (matrix.row === 1) {
    return "Matrix Row";
  }

  if (matrix.col === 1) {
    return "Matrix Column";
  }

  if (matrix.diagonal && matrix.sideDiagonal) {
    const { up, down } = matrix.sideDiagonal;
    const { main } = matrix.diagonal;

    const isUpperTriangular = up.every((val) => val === 0);
    const isLowerTriangular = down.every((val) => val === 0);
    const isIdentity = main.every((val) => val === 1);
    const isDiagonal = main.every((val) => val === 0);

    if (isUpperTriangular && isLowerTriangular) {
      if (isIdentity) {
        return "Matrix Identity";
      } else if (isDiagonal) {
        return "Matrix Diagonal";
      }
    }

    if (isUpperTriangular) {
      return "Matrix Triangular Up";
    }

    if (isLowerTriangular) {
      return "Matrix Triangular Down";
    }

    if (up.join("") === down.join("")) {
      return "Matrix Symmetric";
    }
  }

  return `Matrix ${matrix.type.charAt(0).toUpperCase() + matrix.type.slice(1)}`;
}
