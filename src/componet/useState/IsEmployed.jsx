import { useState } from "react";

const IsEmployed = () => {
  const [isemployee, setEmployee] = useState(false);
  const [shipping, setShipping] = useState("");
  const handleEmployee = () => {
    setEmployee(!isemployee);
  };

  const handleShipping = (e) => {
    setShipping(e.target.value);
  };
  return (
    <div>
      <div> isemployee:{isemployee ? "Yes" : "no"}</div>
      <button onClick={handleEmployee}>toggleChaged</button>
      <br />

      <label htmlFor="">
        <input
          type="radio"
          //   name="hello"
          value="delivery"
          checked={shipping === "delivery"}
          onChange={handleShipping}
        />
        delivery
      </label>
      <label htmlFor="">
        <input
          type="radio"
          //   name="hello"
          value="pick up"
          checked={shipping === "pick up"}
          onChange={handleShipping}
        />
        pick up
      </label>
      <p>shipping:{shipping}</p>
    </div>
  );
};

export default IsEmployed;
