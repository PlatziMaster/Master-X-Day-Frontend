import React from 'react';
import styles from './ButtonSecondary.module.css';

function Button({ children }) 
{
  return (
    <button className={styles.Button}>{children}</button>
  );
}

export default Button;
