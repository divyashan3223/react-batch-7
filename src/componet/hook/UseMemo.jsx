import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(10);
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  function showMax() {
    console.log("changing max");
    return Math.max(...arr);
  }
  const memVal = useMemo(() => showMax(), [arr]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add a count number</button>
      <button
        onClick={() => setArr([...arr, Math.round(count * Math.random())])}
      >
        add a count number
      </button>
      <p>{memVal}</p>
      <p>{count}</p>
      <p>{JSON.stringify(arr)}</p>
    </div>
  );
};

export default UseMemo;
