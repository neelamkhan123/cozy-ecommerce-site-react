import { Link } from "react-router-dom";
import GreenButton from "../UI/Buttons/GreenButton";

import classes from "./Login.module.css";

const Login = () => {
  return (
    <main className={classes.login}>
      <div className={classes["login-container"]}>
        <section className={classes["login-a"]}>
          <div className={classes.message}>
            <h1 className={classes["section-heading"]}>Welcome back!</h1>
            <p className={classes["para-primary"]}>
              Sign in to track orders, save products and more :)
            </p>
          </div>
        </section>

        <section className={classes["login-b"]}>
          <h3 className={classes["section-title"]}>Log In</h3>
          <form className={classes.form}>
            <input type="text" placeholder="Username or email" />
            <input type="password" placeholder="Password" />
          </form>
          <p className={classes["para-secondary"]}>Forgot password?</p>
          <GreenButton className={classes["btn-login"]}>Log In</GreenButton>
          <p className={classes["para-secondary"]}>
            Haven't got an account yet?
            <Link className={classes.link} to="/login">
              Create an account
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Login;
