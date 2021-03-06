import React from "react";
import styles from "./List.module.css";

function List({ headerTitle, cardsCount, children }) {
  return (
    <div className={styles.List}>
      <div className={styles.HeaderTitleContainer}>
        <div className={styles.HeaderTitle}>
          <p>
            <span className={styles.CircleIcon}></span>
            {headerTitle}
          </p>
        </div>
        <div className={styles.CardsCount}>
          <p>{cardsCount}</p>
        </div>
      </div>
      <div className={styles.ListCards}>{children}</div>
    </div>
  );
}

export default List;
