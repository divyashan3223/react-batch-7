import React, { useState } from "react";
import Children from "./Children";

const Temp = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Children count={count} setCount={setCount} />
    </div>
  );
};

export default Temp;
