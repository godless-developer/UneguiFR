"use client";

import { useState } from "react";
import "../styles/calculator.css";

export default function Calculator() {
  const [screen, setScreen] = useState("calculator");
  function buttonClicked(too) {
    setScreen(screen + too);
  }

  function clearHandler() {
    setScreen("");
  }

  function operationHandler() {
    for (let i = 0; i < screen.length; i++) {
      if (screen[i] === "+") {
        const nums = screen.split("+");
        const result = Number(nums[0]) + Number(nums[1]);
        setScreen(result);
      }
      if (screen[i] === "-") {
        const nums = screen.split("-");
        const result = Number(nums[0]) - Number(nums[1]);
        setScreen(result);
      }
      if (screen[i] === "x") {
        const nums = screen.split("x");
        const result = Number(nums[0]) * Number(nums[1]);
        setScreen(result);
      }
      if (screen[i] === "/") {
        const nums = screen.split("/");
        const result = Number(nums[0]) / Number(nums[1]);
        setScreen(result);
      }
    }
  }

  return (
    <div className="c-container">
      <div className="c-p">
        <p> {screen}</p>
      </div>
      <div className="c-buttons">
        <button onClick={() => buttonClicked(1)}>1</button>
        <button onClick={() => buttonClicked(2)}>2</button>
        <button onClick={() => buttonClicked(3)}>3</button>
        <button onClick={() => buttonClicked(4)}>4</button>
        <button onClick={() => buttonClicked(5)}>5</button>
        <button onClick={() => buttonClicked(6)}>6</button>
        <button onClick={() => buttonClicked(7)}>7</button>
        <button onClick={() => buttonClicked(8)}>8</button>
        <button onClick={() => buttonClicked(9)}>9</button>
        <button onClick={() => buttonClicked(0)}>0</button>
        <button onClick={() => buttonClicked("+")}>+</button>
        <button onClick={() => buttonClicked("-")}>-</button>
        <button onClick={() => buttonClicked("x")}>x</button>
        <button onClick={() => buttonClicked("/")}>/</button>
        <button onClick={clearHandler}>C</button>
        <button onClick={operationHandler}>=</button>
      </div>
    </div>
  );
}
