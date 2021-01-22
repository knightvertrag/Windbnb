import React, { useState } from "react";
import classes from "./Main.module.scss";
import StayCard from "../StayCard/StayCard";

const Main = () => {
  const [radius, setRadius] = useState(1000);
  const [loading, setLoading] = useState(false);

  const restaurants = [
    {
      photo:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
      res_id: 1,
      type: "Indian",
      rating: 5.0,
      title: "Mainland",
    },
    {
      photo:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
      res_id: 2,
      type: "Chinese",
      rating: 4.0,
      title: "Restaurant2",
    },
  ];

  const handleChange = (event) => {
    setRadius(event.target.value);
    setLoading(true);
  };

  const renderStays = () => {
    return restaurants.map((diningplace) => (
      <StayCard restaurant={diningplace} key={diningplace.res_id} />
    ));
  };

  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <label className={classes.inputLabel}>Enter the radius</label>
        <input
          className={classes.inputArea}
          type="text"
          name="name"
          placeholder="Enter the radius"
          onChange={handleChange}
          value={radius}
        />
      </div>
      {!loading && <div className={classes.body}>{renderStays()}</div>}
    </div>
  );
};

export default Main;
