import React from 'react';
import styles from './Input.module.css';

function Input({ labelInput, inputType, placeholder }) 
{
  return (
    <div className={styles.Input}>
      <label className={styles.LabelContainer}>
        <div className={styles.LabelInput}>{labelInput}</div>
        <input type={inputType} placeholder={placeholder} />
      </label>
    </div>
  );
}

export default Input;
