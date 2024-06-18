import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState({ firstName: "", lastname: "" });

  //   function handlefunction(e) {
  //     console.log(e.target.value);
  //     setName(e.target.value);
  //   }

  return (
    <div>
      <h1>
        {name.firstName} {name.lastname}
      </h1>
      <form>
        <input
          onChange={(e) => {
            // handlefunction(e)
            setName({ ...name, firstName: e.target.value });
          }}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => {
            // handlefunction(e)
            setName({ ...name, lastname: e.target.value });
          }}
          type="text"
          value={name.lastname}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(name);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};
