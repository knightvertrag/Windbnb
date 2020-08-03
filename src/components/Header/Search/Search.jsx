import React from "react";
import classes from "./Search.module.scss";

export const Search = ({
  filterShow,
  setFilterShow,
  location,
  setLocation,
  adult,
  child,
  setFilterActive,
}) => {
  const onClick = () => {
    setFilterShow(true);
    setFilterActive(true);
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.location}
      >{`${location.city}, ${location.country}`}</div>
      <div className={classes.guest}>{`Guests: ${
        adult.amount + child.amount
      }`}</div>
      <i className={`material-icons ${classes.icon}`} onClick={() => onClick()}>
        search
      </i>
    </div>
  );
};
