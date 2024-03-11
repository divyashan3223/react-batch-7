import { useEffect, useMemo, useState } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //   const doubleNumber = slowFunction(number);
  //   const themeStyle = {
  //     backgroundColor: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   };
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  console.log(themeStyle);
  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyle]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        change theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
};
function slowFunction(num) {
  for (let i = 0; i <= 100000; i++) {}
  return num * 2;
}
export default Memo;
