import React from 'react';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import type { ReactNode } from 'react';
import style from './PopUpBox.module.css';

export type PopUpBoxProps = {
  children: ReactNode;
  boxType: 'infoBox' | 'statusBox';
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
  const BoxMap = {
    infoBox: (
      <div className={style.infobox}>
        <Typography size="s">{children}</Typography>
        <Button
          className={style.infoboxButton}
          onClick={onClose}
          children="OK"
        />
      </div>
    ),
    statusBox: (
      <div className={style.statusbox}>
        <Typography size="s">{children}</Typography>
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
