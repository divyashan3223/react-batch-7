import { memo } from "react";

const First = memo(({ count }) => {
  return <div>count:{count}</div>;
});
export const Second = memo(() => {
  return <div>First</div>;
});
export const Third = memo(({ person }) => {
  console.log(person);
  return <div>person:{person.name}</div>;
});
export default First;
