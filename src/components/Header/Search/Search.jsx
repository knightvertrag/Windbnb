import React from "react";
import classes from "./Search.module.scss";

export const Search = ({
  filterShow,
  setFilterShow,
  location,
  setLocation,
}) => {
  const onClick = () => {
    setFilterShow(true);
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.location}
      >{`${location.city}, ${location.country}`}</div>
      <div className={classes.guest}>Add Guests</div>
      <i className={`material-icons ${classes.icon}`} onClick={() => onClick()}>
        search
      </i>
    </div>
  );
};
