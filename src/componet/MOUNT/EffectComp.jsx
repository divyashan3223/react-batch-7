import React, { useEffect, useState } from "react";

const EffectComp = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("mounting phase");
  }, []);

  useEffect(() => {
    console.log("updating phase");
    return () => {
      console.log("unmounted");
    };
  }, [state]);

  return (
    <div>
      <h1>EffectComp</h1>
      <button onClick={() => setState(!state)}>update</button>
    </div>
  );
};

export default EffectComp;
