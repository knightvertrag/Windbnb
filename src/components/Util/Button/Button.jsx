import React from "react";
import classes from "./Button.module.scss";
const Button = ({ children, icon }) => {
  return (
    <div className={classes.btn}>
      <i className={`material-icons ${classes.icon}`}>{icon}</i>
      <span className={classes.txt}>{children}</span>
    </div>
  );
};

export default Button;
