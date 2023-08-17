import { useSelector } from "react-redux";
import banner1 from "../../img/side-banner.jpg";
import salesBanner from "../../img/sale-banner.jpg";
import WishlistItem from "./WishlistItem";

import classes from "./Wishlist.module.css";
import { useState, useEffect } from "react";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const [showWishlistMessage, setShowWishlistMessage] = useState("");

  useEffect(() => {
    if (wishlistItems.length <= 0) {
      setShowWishlistMessage("Add to your wishlist!");
    } else {
      setShowWishlistMessage("Your Wishlist");
    }
  }, [wishlistItems.length]);

  return (
    <>
      <main className={classes["wishlist-container"]}>
        <section className={classes["wishlist-a"]}>
          <img src={salesBanner} alt="" />
          <h2 className={classes["banner-text-one"]}>SALE 30%</h2>
          <h2 className={classes["banner-text-two"]}>All gardening products</h2>
        </section>

        <section className={classes["wishlist-b"]}>
          <img src={banner1} alt="" className={classes["banner-img"]} />
          <div className={classes["side-banner-overlay"]}>
            <p className="section-heading">Let's beautify our lives safely</p>
          </div>
        </section>

        <section className={classes["wishlist-c"]}>
          <h1 className={classes["section-heading"]}>{showWishlistMessage}</h1>

          <ul className={classes["wishlist-list"]}>
            {wishlist.wishlistItems.map((item) => (
              <WishlistItem
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                product={item}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Wishlist;
