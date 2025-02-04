import React, { useContext } from "react";
import { MoneyContext } from "../App";

const GrandGrandChild = () => {
  const data = useContext(MoneyContext);
  return <div>GrandGrandChild recieved {data}</div>;
};

export default GrandGrandChild;
