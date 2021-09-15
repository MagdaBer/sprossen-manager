import React from 'react';
import type { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import style from './Header.module.css';
import Backbutton from '../Backbutton/Backbutton';

type HeaderProps = {
  children: ReactNode;
  className?: string;
  goBack: () => void;
};

function Header({ children, className, goBack }: HeaderProps): JSX.Element {
  return (
    <header className={`${style.header} ${className}`}>
      <Backbutton onClick={goBack} />
      <Typography size="l">{children}</Typography>
    </header>
  );
}
export default Header;
