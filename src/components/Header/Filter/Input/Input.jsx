import React from "react";
import classes from "./Input.module.scss";
const Input = ({ type, placeholder }) => {
  const searchHandler = (e) => {
    let searchedLocation = e.target.value;
  };

  return (
    <div className={classes.container}>
      <div className={classes.txt}>{type}</div>
      <input
        type="text"
        placeholder={placeholder}
        name="Location"
        onChange={(e) => searchHandler(e)}
      />
    </div>
  );
};

export default Input;
