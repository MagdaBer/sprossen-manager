import React from 'react';
import Typography from '../Typography/Typography';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type InfoLinkProps = {
  children: ReactNode;
  className?: string;
};

function InfoLink({ children, className }: InfoLinkProps): JSX.Element {
  return (
    <Link to={'/app/pages/info'}>
      <div className={className}>
        <Typography size={'xsAction'}>{children}</Typography>
      </div>
    </Link>
  );
}
export default InfoLink;
