export default function isValid(matrix: number[][]) {
  return matrix
    .map((row) => row.length)
    .every((cell) => cell === matrix[0].length);
}
