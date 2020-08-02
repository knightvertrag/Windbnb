import React from "react";
import classes from "./Input.module.scss";
const Input = ({ type, placeholder }) => {
  return (
    <div className={classes.container}>
      <div className={classes.txt}>{type}</div>
      <div className={classes.placeholder}>{placeholder}</div>
    </div>
  );
};

export default Input;
