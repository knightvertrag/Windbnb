import React from "react";
import classes from "./Guest.module.scss";

const Guest = ({ adult, setAdult, child, setChild }) => {
  const removeAdult = () => {
    if (adult.amount > 0) {
      setAdult({ ...adult, amount: adult.amount - 1 });
    }
  };
  const removeChild = () => {
    if (child.amount > 0) {
      setAdult({ ...child, amount: child.amount - 1 });
    }
  };
  const addAdult = () => {
    setAdult({ ...adult, amount: adult.amount + 1 });
  };
  const addChild = () => {
    setChild({ ...child, amount: child.amount + 1 });
  };

  return (
    <div className={classes.container}>
      <div className={classes.adult}>
        <div className={classes.txt}>Adults</div>
        <div className={classes.sub_txt}>Ages 13 and above</div>
        <div className={classes.counter}>
          <span className={classes.minus} onClick={removeAdult}>
            <i className="material-icons">remove</i>
          </span>
          <span className={classes.amount}>{adult.amount}</span>
          <span className={classes.plus} onClick={addAdult}>
            <i className="material-icons">add</i>
          </span>
        </div>

        <div className={classes.adult}>
          <div className={classes.txt}>Children</div>
          <div className={classes.sub_txt}>Ages 2-12</div>
          <div className={classes.counter}>
            <span className={classes.minus} onClick={removeChild}>
              <i className="material-icons">remove</i>
            </span>
            <span className={classes.amount}>{child.amount}</span>
            <span className={classes.plus} onClick={addChild}>
              <i className="material-icons">add</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
