"use client";

import { useState } from "react";
import "../styles/calculator.css";

export default function Calculator() {
  const [number, setNumber] = useState(0);
  return (
    <div className="c-container">
      <p>Number = {number}</p>
      <button onClick={() => setNumber(1)}>1</button>
      <button onClick={() => setNumber(2)}>2</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={() => setNumber(4)}>4</button>
      <button onClick={() => setNumber(5)}>5</button>
      <button onClick={() => setNumber(6)}>6</button>
      <button onClick={() => setNumber(7)}>7</button>
      <button onClick={() => setNumber(8)}>8</button>
      <button onClick={() => setNumber(9)}>9</button>
      <button onClick={() => setNumber(10)}>10</button>
    </div>
  );
}
