import React from "react";
import classes from "./Main.module.scss";
import stays from "../../Data/stays.json";
import StayCard, { IStay } from "../StayCard/StayCard";

const Main = ({ location, setLocation, adult, setAdult, child, setChild }) => {
  const filteredStays = stays.filter((item) => {
    return (
      item.city === location.city &&
      item.country === location.country &&
      item.maxGuests >= adult.amount + child.amount
    );
  });

  const renderFilterStays = () => {
    console.log(filteredStays);
    return filteredStays.map((stay) => (
      <StayCard stay={stay} key={stay.title} />
    ));
  };
  const renderStays = () => {
    console.log(stays);
    return stays.map((stay) => <StayCard stay={stay} key={stay.title} />);
  };

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        {filteredStays.length === 0 ? renderStays() : renderFilterStays()}
      </div>
    </div>
  );
};

export default Main;
