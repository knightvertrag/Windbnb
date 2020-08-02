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
  return (
    <div className={classes.content_area}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
