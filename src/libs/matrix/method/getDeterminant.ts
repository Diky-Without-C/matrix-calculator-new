import Matrix from "..";
import sarrus from "./sarrus";

export default function getDeterminant(matrix: Matrix) {
  switch (matrix.ordo) {
    case "2×2":
      const [[a, b], [c, d]] = matrix.cell;
      return a * d - b * c;
    case "3×3":
      return sarrus(matrix.cell);
    default:
      throw new Error("invalid matrix");
  }
}
