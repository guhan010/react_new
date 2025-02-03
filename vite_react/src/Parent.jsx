import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [salary, setSalary] = useState(10000);

  function increaseSalary(a) {
    setSalary(salary + a);
  }
  return (
    <div>
      parent component
      <br />
      {/* <Child name={name} /> */}
      <Child name="brad" age={24} salary={salary} increase={increaseSalary} />
    </div>
  );
};

// props = {
//   name: "jack",
// };

export default Parent;
