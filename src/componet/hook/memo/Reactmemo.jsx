import React from "react";
import { useState } from "react";
import First, { Second, Third } from "./First";

const Reactmemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>value:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        change
      </button>
      <First />
      <Second />
      <Third />
    </div>
  );
};

export default Reactmemo;
