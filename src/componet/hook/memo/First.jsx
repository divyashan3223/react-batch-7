import { memo } from "react";

const First = memo(() => {
  return <div>First</div>;
});
export const Second = memo(() => {
  return <div>First</div>;
});
export const Third = memo(() => {
  return <div>First</div>;
});
export default First;
