import styles from "./calculator.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Buttons from "../Buttons";
import Screen from "../Screen";

function Calculator() {


  return (
    <motion.div
      className={styles.calculatorDiv}
      initial={{ y: -20 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Screen  />
      <Buttons />
    </motion.div>
  );
}

export default Calculator;
