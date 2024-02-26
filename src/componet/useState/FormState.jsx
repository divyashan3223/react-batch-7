import { useState } from "react";
const FormState = () => {
  const [name, setName] = useState("");
  let handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>name:{name}</p>
    </div>
  );
};

export default FormState;
