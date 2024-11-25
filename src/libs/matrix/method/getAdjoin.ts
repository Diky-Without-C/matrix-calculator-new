import Matrix from "..";

export default function getAdjoin(matrix: Matrix) {
  switch (matrix.ordo) {
    case "2×2":
      const [[a, b], [c, d]] = matrix.cell;
      const newMatrix = [
        [d, -b],
        [-c, a],
      ];
      return new Matrix(newMatrix);
    case "3×3":
      return matrix.cofactor().transpose();
    default:
      throw new Error("invalid matrix");
  }
}
