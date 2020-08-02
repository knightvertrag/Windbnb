import React, { Fragment } from "react";
import classes from "./Filter.module.scss";
import Button from "../../Util/Button/Button";
import Guest from "./Guest/Guest";
import Input from "./Input/Input";
import stays from "../../../Data/stays.json";

const Filter = ({ setFilterShow, adult, setAdult, child, setChild }) => {
  //Remove Duplicates in stays.json
  let filteredstays = stays.map((item) => {
    return {
      city: item.city,
      country: item.country,
    };
  });
  //console.log(filteredstays);
  filteredstays = filteredstays.map(JSON.stringify);
  filteredstays = new Set(filteredstays);
  filteredstays = Array.from(filteredstays).map(JSON.parse);
  //console.log(filteredstays);
  const showLocations = () => {
    return filteredstays.map((item) => {
      return (
        <div className={classes.location_options}>
          <div className={classes.option_container}>
            <i className={`material-icons`}>location_on</i>
            <span
              className={classes.location_txt}
            >{`${item.city},${item.country}`}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <i
          className={`material-icons ${classes.back}`}
          onClick={() => setFilterShow(false)}
        >
          arrow_back
        </i>
        <div className={classes.categories}>
          <div className={classes.location_container}>
            <Input type={`Location`} placeholder={`Add Location`} />
            {showLocations()}
          </div>
          <div className={classes.guests}>
            <Input type={`Guests`} placeholder={`Add Guests`} />
            <Guest
              adult={adult}
              setAdult={setAdult}
              child={child}
              setChild={setChild}
            />
          </div>
          <div className={classes.btn}>
            <Button icon={`search`}>Search</Button>
          </div>
        </div>
      </div>
      <div
        className={classes.backdrop}
        onClick={() => setFilterShow(false)}
      ></div>
    </Fragment>
  );
};

export default Filter;
