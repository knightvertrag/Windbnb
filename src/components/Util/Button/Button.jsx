import React from "react";
import classes from "./Button.module.scss";
const Button = ({ children, icon, setActiveFilter }) => {
  return (
    <div className={classes.btn} onClick={() => setActiveFilter(false)}>
      <i className={`material-icons ${classes.icon}`}>{icon}</i>
      <span className={classes.txt}>{children}</span>
    </div>
  );
};

export default Button;
