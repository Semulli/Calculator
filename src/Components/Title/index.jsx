import React from "react";
import styles from "./title.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function Title({ title, variant }) {
  return (
    <motion.div
      className={styles[variant]}
      initial={{ y: -20 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {title}
    </motion.div>
  );
}

export default Title;
