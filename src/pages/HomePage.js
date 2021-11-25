import { Fragment } from "react";
import StartingPageContent from "../components/StartingPage/StartingPageContent";
import classes from "./HomePage.module.css";
const HomePage = () => {
  return (
    <Fragment>
      <div className={classes.background}>
        <StartingPageContent />
      </div>
    </Fragment>
  );
};

export default HomePage;
