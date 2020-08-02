import React from "react";
import classes from "./Main.module.scss";
import stays from "../../Data/stays.json";
import StayCard, { IStay } from "../StayCard/StayCard";

const Main = ({ location, setLocation, adult, setAdult, child, setChild }) => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        {stays.map((stay) => (
          <StayCard stay={stay} key={stay.title} />
        ))}
      </div>
    </div>
  );
};

export default Main;
