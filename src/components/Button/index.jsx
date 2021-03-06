import React from 'react';
import styles from './Button.module.css';

function Button({ children }) 
{
  return (
    <button className={styles.Button}>{children}</button>
  );
}

export default Button;
