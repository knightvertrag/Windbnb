import React, { useEffect, useState } from "react";
import classes from "./Main.module.scss";
import StayCard from "../StayCard/StayCard";
import { apiService } from "../../api";

const Main = () => {
  const [restaurants, setRestaurant] = useState([]);
  const [radius, setRadius] = useState(1000);
  const [loading, setLoading] = useState(true);

  const handleChange = event => {
      setRadius(event.target.value);
      setLoading(true);
  };
  console.log(radius)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      apiService
        .getRestaurants(position.coords.latitude, position.coords.longitude,radius)
        .then((res) => {
          var resttotal = [];
          res.data.restaurants.map(function (restaurant) {
            var a = {
              res_id: restaurant.restaurant.R.res_id,
              rating: restaurant.restaurant.user_rating.aggregate_rating,
              photo: restaurant.restaurant.featured_image,
              title: restaurant.restaurant.name,
              type: restaurant.restaurant.cuisines,
            };
            if(a.photo != "")
              resttotal.push(a);
          });
          setRestaurant(resttotal);
          setLoading(false);
        });
    });
  });

  const renderStays = () => {
    return restaurants.map((restaurant) => (
      <StayCard restaurant={restaurant} key={restaurant.res_id} />
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
      <br/><br/>
      {!loading && <div className={classes.body}>{renderStays()}</div>}
    </div>
  );
};

export default Main;
