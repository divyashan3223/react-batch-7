import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(10);
  const [arr, setArr] = useState([1, 2, 3, 4]);

  let maxNum = () => {
    console.log("changing value");
    return Math.max(...arr);
  };

  let value = useMemo(maxNum, [arr]);
  return (
    <div>
      <p>{count}</p>
      <p>{value}</p>
      <button onClick={() => setCount(count + 1)}>add count</button>
      <button
        onClick={() => setArr([...arr, Math.round(count * Math.random())])}
      >
        add count
      </button>
      <p>{JSON.stringify(arr)}</p>
    </div>
  );
};

export default UseMemo;
