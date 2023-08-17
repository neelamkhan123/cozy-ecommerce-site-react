import classes from "./CartItem.module.css";

import { deleteItem } from "../../slices/cartSlice";
import { increment } from "../../slices/cartSlice";
import { decrement } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  // const cartTotalQuantity = useSelector(
  //   (state) => state.cart.cartTotalQuantity
  // );

  function deleteCartItemHandler(product) {
    dispatch(deleteItem(product));
  }

  function incrementHandler(product) {
    dispatch(increment(product));
  }

  function decrementHandler(product) {
    dispatch(decrement(product));
  }

  return (
    <li className={classes["item-container"]}>
      <div className={classes["cart-item"]}>
        <img src={props.img} alt="Item" className={classes.image} />
        <div className={classes.description}>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.price}>£{props.price.toFixed(2)}</p>
        </div>
      </div>
      <div className={classes.actions}>
        <div className={classes.quantity}>
          <button
            onClick={() => incrementHandler(props.product)}
            className={`${classes.increment} ${classes.btn}`}
          >
            <i className="fa-sharp fa-solid fa-plus"></i>
          </button>
          <input
            className={classes.input}
            type="text"
            value={props.product.cartItemQuantity}
            readOnly
          />
          <button
            onClick={() => decrementHandler(props.product)}
            className={`${classes.decrement} ${classes.btn}`}
          >
            <i className="fa-sharp fa-solid fa-minus"></i>
          </button>
        </div>
        <button
          onClick={() => deleteCartItemHandler(props.product)}
          className={classes["delete-btn"]}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
