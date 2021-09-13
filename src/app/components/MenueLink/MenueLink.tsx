import React from 'react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import styles from './MenueLink.module.css';

export type MenuLinkProps = {
  children: ReactNode;
  to: string;
  className?: string;
};

function MenuLink({ children, to, className }: MenuLinkProps): JSX.Element {
  return (
    <Link to={to} className={className}>
      <div className={styles.menue}>
        <Typography size={'l'}>{children}</Typography>
      </div>
    </Link>
  );
}
export default MenuLink;
