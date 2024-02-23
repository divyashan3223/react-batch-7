import React, { useState } from "react";
import EffectComp from "./EffectComp";

const Effect = () => {
  const [mount, setMount] = useState(false);
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setMount(!mount)}>
        {mount ? "Unmount" : "Mount"}
      </button>
      <br />
      {mount ? <EffectComp /> : "not mounted"}
    </div>
  );
};

export default Effect;
