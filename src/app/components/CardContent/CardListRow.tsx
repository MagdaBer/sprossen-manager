import React from 'react';
import Icon from '../Icon/Icon';
import '../../App.less';
import type { IconTypes } from '../../enums/IconTypes';

type CardListRowProps = {
  label: string;
  value: string;
  iconType?: IconTypes;
};

const CardListRow = (props: CardListRowProps): JSX.Element => {
  const { label, value, iconType } = props;
  return (
    <div className="cardContent__row">
      <Icon className="cardContent__row--hasIcon" iconType={iconType} />
      <div className="cardContent__row--hasLabel">{label}</div>
      <div className="cardContent__row--hasValue">{value}</div>
    </div>
  );
};
export default CardListRow;
