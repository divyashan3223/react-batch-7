import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import First, { Second, Third } from "./First";

const Reactmemo = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  console.log("parent");
  // const handleChange = useCallback(() => {
  //   return {
  //     name: "dinesh",
  //     age: 22,
  //   };
  // }, [age]);
  const handleChange = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <div>
      <p>value:{count}</p>
      <p>age:{age}</p>
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
      <Third handleChange={handleChange} />
    </div>
  );
};

export default Reactmemo;
