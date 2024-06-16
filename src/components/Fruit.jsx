import React from "react";

const Fruit = ({ name, price, soldOut }) => {
  //   Greater than 5
  //   return <>{price > 5 && <li key={name}>{`${name} $${price}`}</li>}</>;
  return (
    <>
      <li key={name}>{`${name} $${price} ${
        soldOut ? "Sold Out" : "Available"
      }`}</li>
    </>
  );
};

export default Fruit;
