import React, { useEffect } from "react";
import styles from "./Dashboard.module.css";
import useBoardLists from "../../hooks/useBoardLists";

import Header from "../../components/Header/";
import Card from "../../components/Card/";

const Dashboard = () => {
  const { list } = useBoardLists();

  const currentDate = () => {
    let date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = String(date.getDate()).padStart(2, "0");
    const monthNumber = date.getMonth();
    const monthName = months[monthNumber];
    const year = date.getFullYear();

    return [day, monthName, year];
  };

  useEffect(() => {}, []);

  return (
    <>
      <Header />

      <main className={styles.dashboard}>
        <div className={styles.headContainer}>
          <p className={styles.text}>Today</p>

          <p className={styles.h4}>{`${currentDate()[0]} ${currentDate()[1]} ${
            currentDate()[2]
          }`}</p>
        </div>

        <div>
          {list.map((card) => (
            <Card title={card.name} tasks={5} progress={21} color={"#FFACAC"} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
