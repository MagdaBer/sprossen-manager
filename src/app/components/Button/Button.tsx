import React from 'react';
import type { ReactNode } from 'react';
import styles from './Button.module.css';
import Typography from '../Typography/Typography';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onButtonClick: () => void;
};

function Button({
  children,
  className,
  onButtonClick,
}: ButtonProps): JSX.Element {
  return (
    <button className={`${styles.button} ${className}`} onClick={onButtonClick}>
      <Typography size="xsAction">{children}</Typography>
    </button>
  );
}

export default Button;
