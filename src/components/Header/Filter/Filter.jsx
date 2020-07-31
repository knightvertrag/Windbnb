import React from "react";
import classes from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.categories}>
        <div className={classes.location}>Location</div>
        <div className={classes.guests}>Guests</div>
        <div className={classes.btn}>Search</div>
      </div>
    </div>
  );
};

export default Filter;
