import classes from "./DeliveryBanner.module.css";

const DeliveryBanner = () => {
  return (
    <section className={classes.section}>
      <ul className={classes["delivery-options"]}>
        <li className={classes.option}>
          <div className={classes.icon}>
            <i className="fa-solid fa-person-walking-luggage"></i>
          </div>
          <p className={classes["para-secondary"]}>Click & Collect</p>
        </li>
        <li className={classes.option}>
          <div className={classes.icon}>
            <i className="fa-solid fa-calendar-day"></i>
          </div>
          <p className={classes["para-secondary"]}>Same Day Pick-Up</p>
        </li>
        <li className={classes.option}>
          <div className={classes.icon}>
            <i className="fa-solid fa-truck"></i>
          </div>
          <p className={classes["para-secondary"]}>Home Delivery</p>
        </li>
        <li className={classes.option}>
          <div className={classes.icon}>
            <i className="fa-solid fa-calendar-days"></i>
          </div>
          <p className={classes["para-secondary"]}>Nominated Delivery</p>
        </li>
      </ul>
    </section>
  );
};

export default DeliveryBanner;
