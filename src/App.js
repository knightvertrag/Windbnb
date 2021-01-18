import React from "react";
import classes from "./App.module.scss";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className={classes.content_area}>
      <Main/>
      <hr />
      <div className={classes.footer}>GNU/Linux Users' Group, NIT Durgapur.</div>
    </div>
  );
};

export default App;
