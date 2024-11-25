import customRound from "./utils/customRound";
import expand from "./method/expand";
import getAdjoin from "./method/getAdjoin";
import getDeterminant from "./method/getDeterminant";
import getDiagonal from "./method/getDiagonal";
import getSideDiagonal from "./method/getSideDiagonal";
import isValid from "./utils/isValid";
import identify from "./utils/identify";

export default class Matrix {
  cell: number[][];
  row: number;
  col: number;
  ordo: string;
  type: "square" | "rectangle";
  identity: string;
  diagonal?: { main: number[]; side: number[] };
  sideDiagonal?: { up: number[]; down: number[] };

  constructor(value: number[][]) {
    if (!isValid(value)) throw new Error("invalid value");
    this.cell = value;
    this.row = this.cell.length;
    this.col = this.cell[0].length;
    this.ordo = `${this.row}×${this.col}`;
    this.type = this.row === this.col ? "square" : "rectangle";
    this.identity = identify(this);
    this.diagonal = getDiagonal(this);
    this.sideDiagonal = getSideDiagonal(this);
  }

  trace() {
    if (!this.diagonal)
      throw new Error("this matrix dont have diagonal property");

    return this.diagonal.main.reduce((a, b) => a + b);
  }

  transpose() {
    const result = Array.from({ length: this.col }, (_, i) =>
      Array.from({ length: this.row }, (_, j) => this.cell[j][i]),
    );

    return new Matrix(result);
  }

  scallar(value: number) {
    const result = this.cell.map((row) =>
      row.map((cell) => customRound(cell * value)),
    );

    return new Matrix(result);
  }

  determinant() {
    if (this.type !== "square")
      throw new Error("determinant can only apply to matrix Square");

    return getDeterminant(this);
  }

  cofactor() {
    if (this.ordo !== "3×3")
      throw new Error("cofactor can only apply to matrix with ordo 3×3");

    return expand(this);
  }

  adjoin() {
    if (this.type !== "square")
      throw new Error("adjoin can only apply to matrix Square");

    return getAdjoin(this);
  }

  inverse() {
    if (this.type !== "square")
      throw new Error("inverse can only apply to matrix Square");
    if (this.determinant() === 0) throw new Error("this is a matrix singular");

    const det = this.determinant();
    return this.adjoin().scallar(1 / det);
  }

  sum(matrix: Matrix, operator: "+" | "-" = "+") {
    if (this.ordo !== matrix.ordo)
      throw new Error(
        `matrix ${this.ordo} can not be ${
          operator === "+" ? "added to" : "reduced by"
        } matrix ${matrix.ordo}`,
      );

    const result = this.cell.map((row, i) =>
      row.map((cell, j) => {
        const value = matrix.cell[i][j];
        return operator === "+" ? cell + value : cell - value;
      }),
    );

    return new Matrix(result);
  }

  multiple(matrix: Matrix) {
    if (this.col !== matrix.row)
      throw new Error(
        `matrix ${this.ordo} cannot multiply with matrix ${matrix.ordo}`,
      );

    const result = Array.from({ length: this.row }, () =>
      Array(matrix.col).fill(0),
    );

    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < matrix.col; j++) {
        for (let k = 0; k < this.col; k++) {
          result[i][j] += this.cell[i][k] * matrix.cell[k][j];
        }
      }
    }

    return new Matrix(
      result.map((row) => row.map((cell) => customRound(cell))),
    );
  }

  power(value: number): Matrix {
    if (this.type !== "square")
      throw new Error("power can only apply to Matrix Square");
    if (value <= 0)
      throw new Error("can not power with zero or negative value");

    return value === 1 ? this : this.multiple(this.power(value - 1));
  }
}
