import "./props.css";

const Props = ({ btn = "button", style, padding }) => {
  return (
    <div>
      <h1 className={`${padding}`}>hello</h1>
      <button className={`${style} ${padding}`}>{btn}</button>
    </div>
  );
};

export default Props;
