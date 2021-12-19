import React from 'react';
import Icon from '../Icon/Icon';
import style from './CardListRow.module.css';
import type { IconType } from '../Icon/Icon';

type CardListRowProps = {
  label: string;
  value: string;
  iconType?: IconType;
};

const CardListRow = (props: CardListRowProps): JSX.Element => {
  const { label, value, iconType } = props;
  return (
    <div className={style.row}>
      <Icon className={style.row__icon} iconType={iconType} />
      <div className={style.row__label}>{label}</div>
      <div className={style.row__value}>{value}</div>
    </div>
  );
};
export default CardListRow;
