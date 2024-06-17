import React from "react";

const Message = () => {
  const handleClick = () => console.log("click");

  return (
    <div>
      <button onClick={handleClick}>click Here</button>
    </div>
  );
};

export default Message;
