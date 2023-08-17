import ItemList from "../Items/ItemList";
import { INVENTORY } from "../../dummy-data";

import classes from "./Bestsellers.module.css";

const Bestsellers = () => {
  return (
    <section className={classes.section}>
      <h1 className={classes["section-title"]}>Our Bestsellers</h1>
      <div className={classes.items}>
        <ItemList products={INVENTORY.filter((item) => item.id === 24)} />
        <ItemList products={INVENTORY.filter((item) => item.id === 25)} />
        <ItemList products={INVENTORY.filter((item) => item.id === 31)} />
        <ItemList products={INVENTORY.filter((item) => item.id === 28)} />
      </div>
    </section>
  );
};

export default Bestsellers;
