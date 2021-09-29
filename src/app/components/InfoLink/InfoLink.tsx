import React from 'react';
import Typography from '../Typography/Typography';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import style from './InfoLink.module.css';
import ForwardIcon from '../../assets/SVG/Forward';

type InfoLinkProps = {
  type?: 'small' | 'big';
  children: ReactNode;
  className?: string;
  to: string;
};

function InfoLink({
  type = 'small',
  children,
  className,
  to,
}: InfoLinkProps): JSX.Element {
  return (
    <Link to={to} className={className}>
      <Typography
        className={`${style.info} ${type === 'big' && style.big}`}
        size={'xsAction'}
      >
        {children}
        {type === 'big' && <ForwardIcon />}
      </Typography>
    </Link>
  );
}
export default InfoLink;
