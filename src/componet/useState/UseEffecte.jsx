import React, { useEffect, useState } from "react";
// import UseEfficte from "../hook/UseEfficte";

const UseEffecte = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  let handleClickIncrement1 = () => {
    setCount(count + 1);
  };
  let handleClickIncrement2 = () => {
    setCount1(count1 + 2);
  };
  useEffect(() => {
    console.log("this state is working");
    return function add() {
      alert("this is your clean up code");
    };
  }, [count1]);
  return (
    <>
      <h1>count:{count}</h1>
      <h1>count:{count1}</h1>
      <button onClick={handleClickIncrement1}>increment +1</button>
      <button onClick={handleClickIncrement2}>increment +2</button>
    </>
  );
};

export default UseEffecte;
