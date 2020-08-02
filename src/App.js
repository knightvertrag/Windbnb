import React, { useState } from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  const [adult, setAdult] = useState({
    amount: 0,
  });
  const [child, setChild] = useState({
    amount: 0,
  });
  const [location, setLocation] = useState({
    city: "Helinski",
    country: "Finland",
  });
  return (
    <div className={classes.content_area}>
      <Header
        adult={adult}
        setAdult={setAdult}
        child={child}
        setChild={setChild}
        location={location}
        setLocation={setLocation}
      />
      <Main
        adult={adult}
        setAdult={setAdult}
        child={child}
        setChild={setChild}
        location={location}
        setLocation={setLocation}
      />
    </div>
  );
};

export default App;
