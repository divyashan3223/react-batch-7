import React, { useState } from "react";

const Event = () => {
  const [inputValue, setInputValue] = useState("");

  function handleClick(e) {
    console.log(e);
  }

  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInput} />
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Event;
