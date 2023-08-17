import classes from "./WishlistItem.module.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../slices/wishlistSlice";

const WishlistItem = (props) => {
  const dispatch = useDispatch();

  function deleteHandler(product) {
    dispatch(deleteItem(product));
  }

  return (
    <li className={classes["wishlist-item"]}>
      <div className={classes["item-container"]}>
        <img src={props.img} alt="Item" className={classes.image} />
        <div className={classes.description}>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.price}>£{props.price}.00</p>
        </div>
      </div>
      <div
        className={classes["delete-btn"]}
        onClick={() => deleteHandler(props.product)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </li>
  );
};

export default WishlistItem;
