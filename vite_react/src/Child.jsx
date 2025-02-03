import React from "react";
import PropTypes from "prop-types";

const Child = ({ name, age, salary, increase }) => {
  return (
    <div>
      Hello {name} And age is {age} and salary is {salary}
      <button
        onClick={() => {
          increase(2000);
        }}
      >
        Increase Salary
      </button>
    </div>
  );
};
Child.defaultProps = {
  name: "Guest",
  age: "N/A",
  salary: "NA",
};

Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

export default Child;
