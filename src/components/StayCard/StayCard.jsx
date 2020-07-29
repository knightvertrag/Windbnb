import React from "react";
import classes from "./StayCard.module.scss";

export const IStay = {
  city: String,
  country: String,
  superHost: Boolean,
  title: String,
  rating: Number,
  maxGuests: Number,
  type: String,
  beds: Number | null,
  photo: String,
};

const StayCard = ({ stay }) => {
  return (
    <div className={classes.container}>
      <img src={stay.photo} alt={stay.title} className={classes.photo} />
      <div className={classes.body}>
        <div className={classes.description}>
          {stay.superHost ? <span>Super Host</span> : null}
          <p>
            {stay.type}.{stay.beds ? `${stay.beds} beds` : ""}
          </p>
        </div>
        <div className={classes.rating}>
          <span className={`material-icons ${classes.rating_icon}`}>grade</span>
          <span className={classes.rating_value}>{stay.rating}</span>
        </div>
      </div>
      <p className={classes.title}>{stay.title}</p>
    </div>
  );
};

export default StayCard;
