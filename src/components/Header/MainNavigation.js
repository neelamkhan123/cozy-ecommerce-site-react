import Navbar from "./Navbar";
import Logo from "../UI/Logo";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  let cartQuantity = cartItems.length;
  let wishlistQuantity = wishlistItems.length;

  return (
    <header>
      <div className={classes.header}>
        <Logo className={classes["header-logo"]} />
        <ul className={classes["user-icons"]}>
          <li className={classes["user-icon"]}>
            <NavLink to="/login">
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </li>
          <li className={classes["user-icon"]}>
            <NavLink to="/wishlist">
              <i className="fa-solid fa-heart"></i>
            </NavLink>
            <span className={classes.count}>{wishlistQuantity}</span>
          </li>
          <li className={classes["user-icon"]}>
            <NavLink to="/cart">
              <i className="fa-solid fa-bag-shopping cart-icon"></i>
            </NavLink>
            <span className={classes.count}>{cartQuantity}</span>
          </li>
        </ul>
      </div>
      <Navbar />
    </header>
  );
};

export default MainNavigation;
