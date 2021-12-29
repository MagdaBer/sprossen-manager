import React from 'react';
import BackIcon from '../../assets/SVG/BackIcon';
import styles from './Backbutton.module.css';

type BackbuttonProps = {
  className?: string;
  onClick: () => void;
};

function Backbutton({ className, onClick }: BackbuttonProps): JSX.Element {
  return (
    <div onClick={onClick} className={`${styles.button} ${className}`}>
      <BackIcon width="0.9rem" height="1.5rem" />
    </div>
  );
}
export default Backbutton;
