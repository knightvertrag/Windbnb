//import logo from './logo.svg';
import classes from "./App.module.scss";
import Main from './components/Main/Main'
function App() {
  return (
    <div className={classes.content_area}>
    {/* <img src={image} alt="Banner" className={classes.img} /> */}
    <Main/>
    <hr />
    <div className={classes.footer}>GNU/Linux Users' Group, NIT Durgapur.</div>
  </div>
  );
}

export default App;
