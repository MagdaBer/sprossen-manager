import type {ReactNode} from 'react';
import React from 'react';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import style from './PopUpBox.module.css';
import {TypographyTypes} from "../../enums/TypographyTypes";
import type {PopUpBoxTypes} from "../../enums/PopUpBoxTypes";

export type PopUpBoxProps = {
  children: ReactNode;
  boxType: PopUpBoxTypes;
  className?: string;
  onClose: () => void;
  onGerminateClick: () => void;
  onSoakClick: () => void;
};

const PopUpBox = ({
  children,
  className,
  boxType,
  onClose,
  onGerminateClick,
  onSoakClick,
}: PopUpBoxProps): JSX.Element => {
  const BoxMap: {[boxType in PopUpBoxTypes]:JSX.Element} = {
    infoBox: (
      <div className={style.infobox}>
        <Typography size={TypographyTypes.S}>{children}</Typography>
        <Button
          className={style.infoboxButton}
          onClick={onClose}
          children="OK"
        />
      </div>
    ),
    statusBox: (
      <div className={style.statusbox}>
        <Typography size={TypographyTypes.S}>{children}</Typography>
        <Button onClick={onGerminateClick} children="Einweichen" />
        <Button onClick={onSoakClick} children="Keimen" />
      </div>
    ),
  };
  return (
    <article className={`${style.box} ${className}`}>{BoxMap[boxType]}</article>
  );
};
export default PopUpBox;
