import { useSelector } from "react-redux";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.userName);

  return (
    <section className={classes.starting}>
      <h2>Welcome {username}</h2>
      {!isLoggedIn && <p>Please Login / SignUp</p>}
    </section>
  );
};

export default StartingPageContent;
