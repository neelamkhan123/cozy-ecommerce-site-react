import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { toggleItem } from "../../slices/wishlistSlice";
import { useState } from "react";

import classes from "./Item.module.css";

const Item = (props) => {
  const dispatch = useDispatch();
  const [background, setBackground] = useState(false);

  function addToCartHandler(product) {
    dispatch(addToCart(product));
  }

  function toggleWishlistHandler(product) {
    dispatch(toggleItem(product));
    setBackground((current) => !current);
  }

  return (
    <div>
      <li className={classes.item}>
        <img src={props.img} alt="Item" className={classes.image} />
        <div className={classes.description}>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.price}>£{props.price}.00</p>
        </div>
        <div className={classes.actions}>
          <div
            className={`${classes.addWishlist} ${classes.icon}`}
            onClick={() => toggleWishlistHandler(props.product)}
            style={{
              backgroundColor: background ? "black" : "orange",
            }}
          >
            <i className="fa-solid fa-heart"></i>
          </div>
          <div
            className={`${classes.addCart} ${classes.icon}`}
            onClick={() => addToCartHandler(props.product)}
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Item;
