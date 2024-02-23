import React from "react";

const Children = ({ count, setCount }) => {
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount((pre) => pre + 1)}>increment</button>
      <button onClick={() => setCount((pre) => pre - 1)}>decrement</button>
    </div>
  );
};

export default Children;
