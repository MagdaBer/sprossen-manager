import React from 'react';
import type { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import style from './Header.module.css';
import Backbutton from '../Backbutton/Backbutton';
import {TypographyTypes} from "../../enums/TypographyTypes";

export type HeaderProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

function Header({ children, className, onClick }: HeaderProps): JSX.Element {
  return (
    <header className={`${style.header} ${className}`}>
      <Backbutton onClick={onClick} />
      <Typography size={TypographyTypes.L}>{children}</Typography>
    </header>
  );
}
export default Header;
