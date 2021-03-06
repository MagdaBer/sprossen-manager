import React from 'react';
import DropIcon from '../../assets/SVG/Drop';
import LeafIcon from '../../assets/SVG/Leaf';
import type { IconTypes } from '../../enums/IconTypes';

export type IconProps = {
  iconType?: IconTypes;
  className?: string;
};

const getIcon = (
  iconType?: IconTypes,
  className?: string
): JSX.Element | null => {
  if (!iconType) {
    return null;
  }

  const iconSizeMap: {
    [iconType in IconTypes]: JSX.Element;
  } = {
    dropBig: <DropIcon className={className} width="2rem" height="2.5rem" />,
    dropSmall: (
      <DropIcon className={className} width="1rem" height="0.938rem" />
    ),
    leafBig: <LeafIcon className={className} width="3rem" height="3rem" />,
    leafSmall: (
      <LeafIcon className={className} width="1.115rem" height="0.773rem" />
    ),
  };

  return iconSizeMap[iconType];
};

const Icon = ({ iconType, className }: IconProps): JSX.Element | null => {
  return getIcon(iconType, className);
};

export default Icon;
