import React, { Fragment } from "react";
import classes from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import { Search } from "./Search/Search";
const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <img src={Logo} alt="logo" className={classes.logo} />
        <Search />
      </div>
      <div className={classes.info}>
        <div className={classes.stays}>Stays in Finland</div>
        <div className={classes.amnt}>12+ Stays</div>
      </div>
    </Fragment>
  );
};

export default Header;
