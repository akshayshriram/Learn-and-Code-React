import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");

  //   function handlefunction(e) {
  //     console.log(e.target.value);
  //     setName(e.target.value);
  //   }

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            // handlefunction(e)
            setName(e.target.value);
          }}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
};
