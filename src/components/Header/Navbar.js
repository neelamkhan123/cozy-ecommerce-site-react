import { NavLink } from "react-router-dom";
import { useState } from "react";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className={classes.nav} onMouseLeave={() => setShowNav(false)}>
      <ul className={classes.navbar}>
        <li>
          <NavLink
            to="/products/home"
            className={classes.title}
            onMouseEnter={() => setShowNav(true)}
          >
            Home
          </NavLink>
          {showNav && (
            <ul className={classes["sub-nav"]}>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/home">Living Room</NavLink>
              </li>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/home">Dining Room</NavLink>
              </li>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/home">Bedroom</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/products/garden"
            className={classes.title}
            onMouseEnter={() => setShowNav(true)}
          >
            Garden
          </NavLink>
          {showNav && (
            <ul className={classes["sub-nav"]}>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/garden">Furniture</NavLink>
              </li>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/garden">Tools</NavLink>
              </li>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/garden">Plants</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/products/kitchen"
            className={classes.title}
            onMouseEnter={() => setShowNav(true)}
          >
            Kitchen
          </NavLink>
          {showNav && (
            <ul className={classes["sub-nav"]}>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/kitchen">Cooking</NavLink>
              </li>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/kitchen">Baking </NavLink>
              </li>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/kitchen">Cleaning</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/products/decor"
            className={classes.title}
            onMouseEnter={() => setShowNav(true)}
          >
            Decor
          </NavLink>
          {showNav && (
            <ul className={classes["sub-nav"]}>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/decor">Lighting</NavLink>
              </li>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/decor">Frames</NavLink>
              </li>
              <li className={classes["sub-title"]}>
                <NavLink to="/products/decor">Paint</NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
