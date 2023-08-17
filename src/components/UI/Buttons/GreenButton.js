import classes from "./GreenButton.module.css";

const GreenButton = (props) => {
  return (
    <button
      className={`${classes["green-button"]} ${
        props.className ? props.className : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default GreenButton;
