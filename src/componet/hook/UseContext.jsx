import { useContext, useState } from "react";
import { createContext } from "react";

const MyContext = createContext();

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  let change = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <MyContext.Provider value={{ change, count }}>
        <h1>Parent Component</h1>
        <ChildComponent1 />
      </MyContext.Provider>
    </div>
  );
};

export default ParentComponent;

export const ChildComponent1 = () => {
  return (
    <div>
      <h1>ChildComponent1</h1>
      <ChildComponent2 />
    </div>
  );
};

export const ChildComponent2 = () => {
  return (
    <div>
      <h1>ChildComponent2</h1>
      <ChildComponent3 />
    </div>
  );
};

export const ChildComponent3 = () => {
  let { count, change } = useContext(MyContext);
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={change}>count add</button>
    </div>
  );
};
