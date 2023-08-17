import ItemList from "../Items/ItemList";
import { INVENTORY } from "../../dummy-data";
import { useState } from "react";

import classes from "./ProductPageTemplate.module.css";
import salesBanner from "../../img/sale-banner.jpg";
import banner2 from "../../img/sb2.jpg";

const ProductPageTemplate = (props) => {
  const [showAll, setShowAll] = useState(true);
  const [showFilter1, setShowFilter1] = useState(false);
  const [showFilter2, setShowFilter2] = useState(false);
  const [showFilter3, setShowFilter3] = useState(false);

  return (
    <main className={classes["template-container"]}>
      <section className={classes["template-a"]}>
        <img src={salesBanner} alt="" />
        <h2 className={classes["banner-text-one"]}>SALE 30%</h2>
        <h2 className={classes["banner-text-two"]}>All gardening products</h2>
      </section>

      <section className={classes["template-b"]}>
        <h4 className={classes["section-title"]}>
          REFINE<i className="fa-solid fa-filter"></i>
        </h4>
        <div className={classes.refine}>
          <div className={classes["refine-by"]}>
            <label
              onClick={() => {
                setShowAll(true);
                setShowFilter1(false);
                setShowFilter2(false);
                setShowFilter3(false);
              }}
            >
              ALL
            </label>
          </div>

          <div className={classes["refine-by"]}>
            <label
              onClick={() => {
                setShowFilter1(true);
                setShowFilter2(false);
                setShowFilter3(false);
                setShowAll(false);
              }}
            >
              {props.filter1}
            </label>
          </div>

          <div className={classes["refine-by"]}>
            <label
              onClick={() => {
                setShowFilter2(true);
                setShowFilter1(false);
                setShowFilter3(false);
                setShowAll(false);
              }}
            >
              {props.filter2}
            </label>
          </div>

          <div className={classes["refine-by"]}>
            <label
              onClick={() => {
                setShowFilter3(true);
                setShowFilter2(false);
                setShowFilter1(false);
                setShowAll(false);
              }}
            >
              {props.filter3}
            </label>
          </div>
        </div>
      </section>

      <section className={classes["template-c"]}>
        <h1 className={classes["section-heading"]}>{props.heading}</h1>

        <div className={classes["template-list"]}>
          {showAll && (
            <ItemList
              products={INVENTORY.filter(
                (item) => item.category === props.category
              )}
            />
          )}
          {showFilter1 && (
            <ItemList
              products={INVENTORY.filter(
                (item) => item.filter === props.filter1
              )}
            />
          )}
          {showFilter2 && (
            <ItemList
              products={INVENTORY.filter(
                (item) => item.filter === props.filter2
              )}
            />
          )}
          {showFilter3 && (
            <ItemList
              products={INVENTORY.filter(
                (item) => item.filter === props.filter3
              )}
            />
          )}
        </div>
      </section>

      <section className={classes["template-d"]}>
        <img src={banner2} alt="" className={classes["banner-img"]} />
        <div className={classes["side-banner-overlay"]}>
          <p className="section-heading">Let's beautify our lives safely</p>
        </div>
      </section>
    </main>
  );
};

export default ProductPageTemplate;
