import { memo } from "react";

const First = memo(({ count }) => {
  return <div>count:{count}</div>;
});
export const Second = memo(() => {
  return <div>First</div>;
});
export const Third = memo(({ handleChange }) => {
  return <div>person:{handleChange}</div>;
});
export default First;
