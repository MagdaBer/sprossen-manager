import React from 'react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import Typography from '../Typography/Typography';

export type MenueLinkProps = {
  children: ReactNode;
  to: string;
};

function MenueLink({ children, to }: MenueLinkProps): JSX.Element {
  return (
    <Link to={to}>
      <Typography size={'l'}>{children}</Typography>
    </Link>
  );
}
export default MenueLink;
