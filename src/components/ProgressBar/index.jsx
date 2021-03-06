import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div class={styles.progress}>
      <div class={styles.progressInner} style={{ width: "10%" }}></div>
    </div>
  );
};

export default ProgressBar;
