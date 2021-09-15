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
  changeKeimen: () => void;
  changeEinweichen: () => void;
};

const PopUpBox = ({
  children,
  className,
  boxType,
  onClose,
  changeKeimen,
  changeEinweichen,
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
        <Button onClick={changeEinweichen} children="Einweichen" />
        <Button onClick={changeKeimen} children="Keimen" />
      </div>
    ),
  };
  return (
    <article className={`${style.box} ${className}`}>{BoxMap[boxType]}</article>
  );
};
export default PopUpBox;
