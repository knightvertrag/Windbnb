import React from "react";
import classes from "./StayCard.module.scss";


const StayCard = ({ restaurant }) => {
  return (
    <div className={classes.container}>
      <img
        src={restaurant.photo}
        alt={restaurant.res_id}
        className={classes.photo}
      />
      <div className={classes.body}>
        <div className={classes.description}>
          {" "}
          <p>{restaurant.type}</p>
        </div>
        <div className={classes.rating}>
          <span className={`material-icons ${classes.rating_icon}`}>grade</span>
          <span className={classes.rating_value}>{restaurant.rating}</span>
        </div>
      </div>
      <p className={classes.title}>{restaurant.title}</p>
    </div>
  );
};

export default StayCard;
