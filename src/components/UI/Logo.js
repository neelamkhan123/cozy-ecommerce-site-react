import { NavLink } from "react-router-dom";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <NavLink
      to="/"
      className={`${classes.link} ${props.className ? props.className : ""}`}
    >
      <h1 className={classes.logo}>
        Co<span className={classes["green-z"]}>Z</span>y
      </h1>
    </NavLink>
  );
};

export default Logo;
