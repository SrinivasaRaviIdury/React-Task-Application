import { useSelector } from "react-redux";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <section className={classes.starting}>
      <h2>Welcome User</h2>
      {!isLoggedIn && <p>Please Login / SignUp</p>}
    </section>
  );
};

export default StartingPageContent;
