import MatrixEquation from "./components/MatrixEquation";
// import NumberPad from "./components/NumberPad";
import Matrix from "./libs/matrix";

export default function App() {
  const P = new Matrix([
    [3, 0],
    [2, 1],
  ]);

  const Q = new Matrix([
    [2, 1],
    [3, 2],
  ]);

  const M = new Matrix([
    [3, -3, 1],
    [2, 0, 3],
    [0, 1, 1],
  ]);

  return (
    <div className="flex h-screen w-full items-center justify-center gap-1">
      <MatrixEquation matrix={P} />
      <span>x</span>
      <MatrixEquation matrix={Q} />
      <span>=</span>
      <MatrixEquation matrix={P.multiple(Q)} />
    </div>
  );
}
