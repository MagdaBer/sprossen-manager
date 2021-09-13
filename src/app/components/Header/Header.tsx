import React from 'react';
import type { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import style from './Header.module.css';
import Backbutton from '../Backbutton/Backbutton';

type HeaderProps = {
  children: ReactNode;
};

function Header({ children }: HeaderProps): JSX.Element {
  return (
    <header className={style.header}>
      <Backbutton />
      <Typography size="l">{children}</Typography>
    </header>
  );
}
export default Header;
