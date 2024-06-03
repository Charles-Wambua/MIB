import React from "react";
import { useState } from "react";

function About() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={add}>+</button>
      <button>{count}</button>
      <button onclick={subtract}>-</button>
    </div>
  );
}

export default About;
