import React from 'react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import styles from './MenueLink.module.css';

export type MenueLinkProps = {
  children: ReactNode;
  to: string;
  className?: string;
};

function MenueLink({ children, to, className }: MenueLinkProps): JSX.Element {
  return (
    <Link to={to} className={className}>
      <div className={styles.menue}>
        <Typography size={'l'}>{children}</Typography>
      </div>
    </Link>
  );
}
export default MenueLink;
