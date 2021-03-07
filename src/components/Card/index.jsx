import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  const { title, color } = props;

  return (
    <div className={styles.card}>
      <div className={styles.divider} style={{ backgroundColor: color }}></div>

      <div>
        <p className={styles.h4}>{title}</p>
      </div>

      <div>
        <div className={styles.editIcon}>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.25 6.9921C11.129 7.69911 8.30089 4.87105 9.0079 2.75M9.87933 1.87857L5.30971 6.4482C3.3231 8.4348 1.91376 10.924 1.23236 13.6496L1.01156 14.5328C0.942762 14.808 1.19204 15.0572 1.46723 14.9884L2.35044 14.7676C5.07604 14.0862 7.5652 12.6769 9.5518 10.6903L14.1214 6.12067C14.684 5.55813 15 4.79516 15 3.99962C15 2.34297 13.657 1 12.0004 1C11.2048 1 10.4419 1.31603 9.87933 1.87857Z"
              stroke="#757575"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;
