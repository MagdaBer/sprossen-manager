import type { ReactNode } from 'react';
import React from 'react';
import '../../App.less';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
