import React from "react";
import { useState } from "react";
import First, { Second, Third } from "./First";

const Reactmemo = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  console.log("parent");
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
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        change age
      </button>
      <First count={count} />
      <Second />
      <Third age={age} />
    </div>
  );
};

export default Reactmemo;
