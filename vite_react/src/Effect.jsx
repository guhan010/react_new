import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState(1000);
  function increase() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log("hello i'm mounted");

    return () => {
      console.log("component unmounted");
    };
  }, []);

  function increasetemp() {
    setTemp(temp + 100);
  }

  return (
    <div>
      Effect component
      <div>
        <h1>{count}</h1>
        <button onClick={increase}>increase</button>
      </div>
      <div>
        <h1>Temperature {temp}</h1>
        <button onClick={increasetemp}>increasetemp</button>
      </div>
    </div>
  );
};

export default Effect;
