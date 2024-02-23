import React from "react";

const Response = () => {
  function handleClick() {
    alert("this is your first alert message");
  }
  return <button onClick={handleClick}>onclick</button>;
};

export default Response;
