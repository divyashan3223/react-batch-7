import React from "react";
const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
const Demo = () => {
  let details = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return <ul>{details}</ul>;
};

export default Demo;
