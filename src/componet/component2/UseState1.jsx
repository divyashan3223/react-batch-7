import { useState } from "react";
const UseState1 = () => {
  const [isEmploye, setisEmploye] = useState(false);
  let handleClick = () => {
    setisEmploye(!isEmploye);
  };
  return (
    <div>
      <h1>isemployee:{isEmploye ? "yes" : "no"}</h1>
      <button onClick={handleClick}>day</button>
    </div>
  );
};

export default UseState1;
