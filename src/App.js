import "./styles.css";
import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(0);
  // const [slide, setSlide] = useState(0);

  const [count, setCount] = useState(0);
  function handleReset() {
    setStep(0);
    setCount(0);
  }

  const date = new Date("May 14 2024");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step:{step}</span>
      </div>
      <button onClick={() => setCount((c) => step + c - 1)}> -</button>{" "}
      <span>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </span>
      <button onClick={() => setCount((c) => step + c + 1)}> + </button>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}.</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
