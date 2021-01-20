import React, { useEffect, useState } from "react";
import classes from "./Main.module.scss";
import StayCard from "../StayCard/StayCard";
import { apiService } from "../../api";

const Main = () => {
  const [restaurants, setRestaurant] = useState([]);
  const [radius, setRadius] = useState(1000);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      const radius= prompt("Please enter the radius");
      setRadius(radius);
      apiService
        .getRestaurants(position.coords.latitude, position.coords.longitude, radius)
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
        });
    });
  }, []);

  const renderStays = () => {
    return restaurants.map((restaurant) => (
      <StayCard restaurant={restaurant} key={restaurant.res_id} />
    ));
  };

  return (
    <div className={classes.container}>
      <div className={classes.body}>{renderStays()}</div>
    </div>
  );
};

export default Main;
