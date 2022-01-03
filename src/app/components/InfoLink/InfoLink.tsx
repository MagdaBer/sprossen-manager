import type { ReactNode } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.less';

type InfoLinkProps = {
  children: ReactNode;
  to: string;
};

function InfoLink({ children, to }: InfoLinkProps): JSX.Element {
  return (
    <div>
      <Link to={to} className="infoLink">
        {children}
      </Link>
    </div>
  );
}
export default InfoLink;
