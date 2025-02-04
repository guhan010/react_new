import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div>
      Child component
      <GrandChild />
    </div>
  );
};

export default Child;
