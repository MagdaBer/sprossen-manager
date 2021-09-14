import React from 'react';
import type { ReactNode } from 'react';
import styles from './Button.module.css';
import Typography from '../Typography/Typography';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

function Button({ children, className, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      <Typography size="xsAction">{children}</Typography>
    </button>
  );
}

export default Button;
