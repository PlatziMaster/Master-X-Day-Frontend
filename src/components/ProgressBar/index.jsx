import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div class="progress">
      <div class="progress-inner" style={{ width: "10%" }}></div>
    </div>
  );
};

export default ProgressBar;
