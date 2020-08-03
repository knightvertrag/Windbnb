import React, { Fragment, useState } from "react";
import classes from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import { Search } from "./Search/Search";
import Filter from "./Filter/Filter";

const Header = ({
  adult,
  setAdult,
  child,
  setChild,
  location,
  setLocation,
}) => {
  const [filterShow, setFilterShow] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  return (
    <Fragment>
      <Filter
        adult={adult}
        setAdult={setAdult}
        child={child}
        setChild={setChild}
        filterShow={filterShow}
        setFilterShow={setFilterShow}
        location={location}
        setLocation={setLocation}
        filterActive={filterActive}
        setFilterActive={setFilterActive}
      />

      <div className={classes.header}>
        <img src={Logo} alt="logo" className={classes.logo} />
        <Search
          filterShow={filterShow}
          setFilterShow={setFilterShow}
          location={location}
          setLocation={setLocation}
          adult={adult}
          child={child}
          setFilterActive={setFilterActive}
        />
      </div>
      <div className={classes.info}>
        <div className={classes.stays}>Stays in Finland</div>
        <div className={classes.amnt}>12+ stays</div>
      </div>
    </Fragment>
  );
};

export default Header;
