import React from 'react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import style from './MenuLink.module.css';

export type MenuLinkProps = {
  children: ReactNode;
  to: string;
  className?: string;
};

function MenuLink({ children, to, className }: MenuLinkProps): JSX.Element {
  return (
    <Link to={to} className={className}>
      <Typography className={style.text} size={'l'}>
        {children}
      </Typography>
    </Link>
  );
}
export default MenuLink;
