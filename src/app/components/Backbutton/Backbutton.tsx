import React from 'react';
import BackIcon from '../assets/BackIcon';
import styles from './Backbutton.module.css';

function Backbutton(): JSX.Element {
  return (
    <button className={styles.button}>
      <BackIcon width="0.9rem" height="1.5rem" />
    </button>
  );
}
export default Backbutton;
