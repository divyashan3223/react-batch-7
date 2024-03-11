import "./App.css";
import ParentComponet from "./componet/hook/UseContext";
import ThemeChange, { Themebutton } from "./componet/hook/context/ThemeChage";
// import Memo from "./componet/hook/memo/Memo";
// import ReactMemo from "./componet/hook/memo/Reactmemo";

function App() {
  return (
    <div>
      <ParentComponet user={"frenzo"} />
    </div>
  );
}

export default App;
