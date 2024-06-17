import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <div>
      <h1>Counter is : {count}</h1>
      <button
        onClick={() => {
          setCount(count + incrementBy);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - incrementBy);
        }}
      >
        Decrement
      </button>

      <h1>Increase Increment by value : {incrementBy}</h1>
      <button
        onClick={() => {
          setIncrementBy(incrementBy + 1);
        }}
      >
        Increase Increment
      </button>
      <button
        onClick={() => {
          setIncrementBy(incrementBy - 1);
        }}
      >
        Decrease Increment
      </button>
    </div>
  );
};

export default Counter;
