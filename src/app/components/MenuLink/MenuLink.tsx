import type { ReactNode } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './MenuLink.module.css';

export type MenuLinkProps = {
  children: ReactNode;
  to: string;
  className?: string;
};

function MenuLink({ children, to, className }: MenuLinkProps): JSX.Element {
  return (
    <Link to={to} className={`${style.text} ${className}`}>
      {children}
    </Link>
  );
}
export default MenuLink;
