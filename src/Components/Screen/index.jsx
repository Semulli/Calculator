import React from "react";
import styles from "./screen.module.css";
import { UseCalcContext } from "../../CalculatorProvider";
function Screen() {

    const{state}=UseCalcContext();
  const getFontSize = () => {
    if (state?.value.length > 10) return "1.5rem";
    if (state?.value.length > 15) return "1rem";
    return "2rem";
  };

  return (
    <div className={styles.screen} style={{ fontSize: getFontSize() }}>
      {state?.value}
    </div>
  );
}

export default Screen;
