import React from "react";
import styles from "./Onboarding.module.css";
import Button from "../../components/Button"

const OnBoarding = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Platzi Trello</h1>
      <h2 className={styles.subtitle}>Welcome! <br></br> Bring your Board ID</h2>

      <input
        type="text"
        placeholder="Escriba el id del tablero"
        name=""
        id="id__input"
        className={styles.id__input}
      />

      <Button>Continue</Button>
    </div>
  );
};

export default OnBoarding;
