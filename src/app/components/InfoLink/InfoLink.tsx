import type {ReactNode} from 'react';
import React from 'react';
import Typography from '../Typography/Typography';
import {Link} from 'react-router-dom';
import style from './InfoLink.module.css';
import ForwardIcon from '../../assets/SVG/Forward';
import {TypographyTypes} from "../../enums/TypographyTypes";
import {InfoLinkTypes} from "../../enums/InfoLinkTypes";


type InfoLinkProps = {
  type?: InfoLinkTypes;
  children: ReactNode;
  className?: string;
  to: string;
};

function InfoLink({
  type = InfoLinkTypes.SMALL,
  children,
  className,
  to,
}: InfoLinkProps): JSX.Element {
  return (
    <Link to={to} className={className}>
      <Typography
        className={`${style.info} ${style[type]}`}
        size={type === InfoLinkTypes.SMALL ? TypographyTypes.XSACTION : TypographyTypes.SACTION}
      >
        {children}
        {type === InfoLinkTypes.BIG && <ForwardIcon />}
      </Typography>
    </Link>
  );
}
export default InfoLink;
