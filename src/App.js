import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className={classes.content_area}>
      <Header />
    </div>
  );
};

export default App;
