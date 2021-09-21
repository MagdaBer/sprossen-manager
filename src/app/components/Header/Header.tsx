import React from 'react';
import type { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import style from './Header.module.css';
import Backbutton from '../Backbutton/Backbutton';

export type HeaderProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

function Header({ children, className, onClick }: HeaderProps): JSX.Element {
  return (
    <header className={`${style.header} ${className}`}>
      <Backbutton onClick={onClick} />
      <Typography size="l">{children}</Typography>
    </header>
  );
}
export default Header;
