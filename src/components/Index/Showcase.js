import classes from "./Showcase.module.css";
import showcase from "../../img/showcase.jpg";

const Showcase = () => {
  return (
    <section className={classes["showcase-container"]}>
      <img src={showcase} alt="Showcase Image" className={classes.showcase} />
      <div className={classes["showcase-text-container"]}>
        <h1 className={`${classes["showcase-heading"]} ${"section-heading"}`}>
          Saving you from global warming and discomfort
        </h1>
        <p className={`${classes["showcase-text"]} ${"para-primary"}`}>
          Let's start using the earth's resources to right way.
        </p>
      </div>
      <div className={classes["sale-banner"]}>
        <h1 className={classes["text-position-one"]}>SALE</h1>
        <h2 className={classes["text-position-two"]}>
          <span className={classes.percentage}>30%</span>
          <span className={classes.text}>OFF ALL GARDERNING PRODUCTS</span>
        </h2>
      </div>
    </section>
  );
};

export default Showcase;
