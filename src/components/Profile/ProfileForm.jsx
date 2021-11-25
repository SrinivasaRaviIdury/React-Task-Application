import { Fragment } from "react";
import classes from "./ProfileForm.module.css";
import { useSelector } from "react-redux";

const ProfileForm = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Fragment>
      <h2> User Profile</h2>
      {isLoggedIn && (
        <table>
          <tr>User Name</tr>
          <tr>User Mail Id</tr>
          <tr>Nummber of Request</tr>
        </table>
      )}
    </Fragment>
  );
};

export default ProfileForm;
