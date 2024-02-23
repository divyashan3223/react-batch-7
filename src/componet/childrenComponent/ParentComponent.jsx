import React from "react";
import { Fragment } from "react";
const ParentComponent = ({ children }) => {
  function handleClick() {
    alert("this is your first alert messafge");
  }
  return (
    <Fragment className="">
      <div>ParentComponent</div>
      <h2>{children}</h2>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        click to alret box
      </button>
    </Fragment>
  );
};

export default ParentComponent;
