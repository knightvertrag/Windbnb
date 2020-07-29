import React from "react";
import classes from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={classes.container}>
      <div className={classes.location}>Helsinki, Finland</div>
      <div className={classes.guest}>Add Guests</div>
      <i className={`material-icons ${classes.icon}`}>search</i>
    </div>
  );
};
