import React, { useMemo } from "react";
import { useState } from "react";
import First, { Second, Third } from "./First";

const Reactmemo = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  console.log("parent");
  const person = useMemo(() => {
    return {
      name: "dinesh",
      age: 22,
    };
  }, [count]);
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
      <Third person={person} />
    </div>
  );
};

export default Reactmemo;
