import React, { useEffect, useState } from "react";

const UseEffecte = () => {
  const [count, setCount] = useState(0);
  const [namecount, setNameCount] = useState(0);
  let handleClickone = () => {
    setCount((c) => c + 1);
  };
  let one = () => {
    setNameCount((c) => c + 1);
  };
  let two = () => {
    setCount((c) => c - 1);
  };
  useEffect(() => {
    console.log("this useEffect event run");
  }, [count]);
  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={handleClickone}>increment +1</button>
      <button onClick={two}>decrement -1</button>
      <h1>namecount:{namecount}</h1>
      <button onClick={one}>Change</button>
    </>
  );
};

export default UseEffecte;
