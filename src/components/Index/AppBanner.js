import Logo from "../UI/Logo";
import app from "../../img/app.png";

import classes from "./AppBanner.module.css";

const AppBanner = () => {
  return (
    <section className={classes.section}>
      <div className={classes.app}>
        <img src={app} alt="#" />
        <div>
          <h4 className={classes["section-title"]}>
            Try our
            <Logo className={classes.logo} />
            app today!
          </h4>
          <p className={classes["para-secondary"]}>
            Get updates on green news, new items and sales! And keep track of
            purchases at the touch of your screen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
