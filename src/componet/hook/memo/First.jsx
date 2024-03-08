import { memo } from "react";

const First = memo(({ count }) => {
  return <div>count:{count}</div>;
});
export const Second = memo(() => {
  return <div>First</div>;
});
export const Third = memo(({ age }) => {
  return <div>age:{age}</div>;
});
export default First;
