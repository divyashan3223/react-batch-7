import { useEffect, useState } from "react";

const UsestateFunction = () => {
  let [count, setCount] = useState(0);
  //   let val = 1;
  const handleClick = () => {
    setCount((pre) => pre + 1);
    console.log(count);
  };
  useEffect(() => {
    console.log(count, "useEffect");
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>click to add number</button>
    </div>
  );
};

export default UsestateFunction;
