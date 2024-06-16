import React from "react";
import Fruit from "./Fruit";

const Fruits = () => {
  //const fruits = ["Apple", "Banana", "Orange"];

  const fruits = [
    {
      name: "Apple",
      price: 10,
      soldOut: false,
    },
    {
      name: "Banana",
      price: 5,
      soldOut: false,
    },
    {
      name: "Orange",
      price: 8,
      soldOut: true,
    },
  ];

  let GreaterThanFive = false;
  return (
    <div>
      <ol>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
        {console.log(fruits)}
      </ol>
    </div>
  );
};

export default Fruits;
