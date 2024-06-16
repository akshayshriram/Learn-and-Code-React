import React from "react";

const Hello = ({ person }) => {
  return (
    <>
      <h1>{`${person.name}`}</h1>
    </>
  );
};

export default Hello;
