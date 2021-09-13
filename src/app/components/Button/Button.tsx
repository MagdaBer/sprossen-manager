import React from 'react';
import type { ReactNode } from 'react';
import styles from './Button.module.css';
import Typography from '../Typography/Typography';

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button}>
      <Typography size="xsAction">{children}</Typography>
    </button>
  );
}

export default Button;
