import React from "react";
import classes from "./Filter.module.scss";
import Button from "../../Util/Button/Button";

const Filter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.categories}>
        <div className={classes.location}>
          <div>location search field</div>
          <div>options</div>
        </div>
        <div className={classes.guests}>
          <div>Guest search field</div>
          <div>options</div>
        </div>
        <div className={classes.btn}>
          <Button icon={`search`}>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
