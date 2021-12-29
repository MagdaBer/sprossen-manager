import type { ReactNode } from 'react';
import React from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

function Button({ children, className, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
