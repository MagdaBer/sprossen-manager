import type { ReactNode } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLink.less';

export type MenuLinkProps = {
  children: ReactNode;
  to: string;
  className?: string;
};

function MenuLink({ children, to, className }: MenuLinkProps): JSX.Element {
  return (
    <Link to={to} className={`menuLink ${className}`}>
      {children}
    </Link>
  );
}
export default MenuLink;
