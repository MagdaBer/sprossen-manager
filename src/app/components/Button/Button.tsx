import React from 'react';
import type { ReactNode } from 'react';
import styles from './Button.module.css';
import Typography from '../Typography/Typography';

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

function Button({ children, className }: ButtonProps): JSX.Element {
  return (
    <button className={`${styles.button} ${className}`}>
      <Typography size="xsAction">{children}</Typography>
    </button>
  );
}

export default Button;
