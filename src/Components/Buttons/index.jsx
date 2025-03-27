import React from "react";
import styles from "./button.module.css";
import { UseCalcContext } from "../../CalculatorProvider";

function Buttons() {
  const buttons = [
    "AC",
    "()",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const { dispatch, state } = UseCalcContext();

  const handleClick = (value) => {
    if (value === "÷") value = "/";
    if (value === "x") value = "*";

    if (["+", "-", "*", "/"].includes(value)) {
      dispatch({ type: "CHOOSE_OPERATION", payload: value });
    } else if (value === "=") {
      dispatch({ type: "CALCULATE" });
    } else if (value === "AC") {
      dispatch({ type: "CLEAR" });
    } else if (value === "%") {
      if (state.previousValue) {
        dispatch({ type: "CHOOSE_OPERATION", payload: "%" });
      } else {
        dispatch({ type: "ADD_PERCENTAGE" });
      }
    } else {
      dispatch({ type: "ADD_DIGIT", payload: value });
    }
  };

  return (
    <div className={styles.buttons}>
      {buttons.map((button, index) => (
        <button key={index} onClick={() => handleClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
