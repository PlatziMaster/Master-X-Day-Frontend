import React from "react";
import styles from "./Onboarding.module.css";
import Button from "../../components/Button"
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router";
import { useStateValue } from "../../context";
import { setId } from '../../context/actions'

const OnBoarding = () => {
  const { dispatch } = useStateValue();
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(setId(data.idBoard));
    history.push('/dashboard');
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Platzi Trello</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label htmlFor="IdBoard">
          <p className={styles.subtitle}>Welcome! <br></br> Bring your Board ID</p>
          <input
            id='IdBoard'
            type="text"
            placeholder="Escriba el id del tablero"
            name="idBoard"
            className={styles.id__input}
            ref={register({ required: "Required", })}
          />
          {errors.idBoard && <span className={styles.error}>{errors.idBoard.message}</span>}
        </label>

        <Button type='submit'>Continue</Button>
      </form>

    </div>
  );
};

export default OnBoarding;
