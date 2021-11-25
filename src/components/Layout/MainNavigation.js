import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./MainNavigation.module.css";
import { Fragment } from "react";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => {
    return state.auth.isLoggedIn;
  });
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Company Logo</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}

          {isLoggedIn && (
            <Fragment>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
