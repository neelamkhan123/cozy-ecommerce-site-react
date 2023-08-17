import { useSelector } from "react-redux";
import banner1 from "../../img/side-banner.jpg";
import salesBanner from "../../img/sale-banner.jpg";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import GreenButton from "../UI/Buttons/GreenButton";
import { useEffect, useState } from "react";
import { getTotal } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const [showCartMessage, setShowCartMessage] = useState("");

  useEffect(() => {
    if (cartItems.length <= 0) {
      setShowCartMessage("No items in the cart, get to shopping!");
    } else {
      setShowCartMessage("Your Cart");
    }
  }, [cartItems.length]);

  return (
    <>
      <main className={classes["cart-container"]}>
        <section className={classes["cart-a"]}>
          <img src={salesBanner} alt="" />
          <h2 className={classes["banner-text-one"]}>SALE 30%</h2>
          <h2 className={classes["banner-text-two"]}>All gardening products</h2>
        </section>

        <section className={classes["cart-b"]}>
          <img src={banner1} alt="" className={classes["banner-img"]} />
          <div className={classes["side-banner-overlay"]}>
            <p className="section-heading">Let's beautify our lives safely</p>
          </div>
        </section>

        <section className={classes["cart-c"]}>
          <h1 className={classes["section-heading"]}>{showCartMessage}</h1>
          <ul className={classes["cart-list"]}>
            {cart.cartItems.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                img={item.img}
                title={item.title}
                price={item.price}
              />
            ))}
          </ul>
        </section>

        <section className={classes["cart-d"]}>
          <h2 className={classes["section-title"]}>
            Total:
            <span className={classes["total-amount"]}>
              £{cartTotalAmount.toFixed(2)}
            </span>
          </h2>
          <GreenButton className={classes.btn}>Checkout</GreenButton>
        </section>
      </main>
    </>
  );
};

export default Cart;
