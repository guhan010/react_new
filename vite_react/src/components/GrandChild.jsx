import React, { useContext } from "react";
import { MoneyContext } from "../App";
import GrandGrandChild from "./GrandGrandChild";

const GrandChild = () => {
  const data = useContext(MoneyContext);
  return (
    <div>
      GrandChild
      <GrandGrandChild />
    </div>
  );
};

export default GrandChild;
