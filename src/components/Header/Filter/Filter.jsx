import React from "react";
import classes from "./Filter.module.scss";
import Button from "../../Util/Button/Button";
import Input from "./Input/Input";

const Filter = ({ setFilterShow }) => {
  return (
    <div className={classes.container}>
      <i
        className={`material-icons ${classes.back}`}
        onClick={() => setFilterShow(false)}
      >
        arrow_back
      </i>
      <div className={classes.categories}>
        <div className={classes.location}>
          <Input type={`Location`} placeholder={`Add Location`} />
          <div>options</div>
        </div>
        <div className={classes.guests}>
          <Input type={`Guests`} placeholder={`Add Guests`} />
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
