import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

const Condition = () => {
  const display = false;
  return <>{display ? <Welcome /> : <Code />}</>;
};

export default Condition;
