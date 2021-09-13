import React from 'react';
import BackIcon from '../assets/BackIcon';
import styles from './Backbutton.module.css';

type BackbuttonProps = {
  className?: string;
};

function Backbutton({ className }: BackbuttonProps): JSX.Element {
  return (
    <button className={`${styles.button} ${className}`}>
      <BackIcon width="0.9rem" height="1.5rem" />
    </button>
  );
}
export default Backbutton;
