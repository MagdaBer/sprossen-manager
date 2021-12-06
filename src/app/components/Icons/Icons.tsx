import React from 'react';
import DropIcon from '../../assets/SVG/Drop';
import LeafIcon from '../../assets/SVG/Leaf';
import type {IconTypes} from "../../enums/IconTypes";

export type IconProps = {
  iconType: IconTypes;
  className?: string;
};

const iconSizeMap: {
  [iconType in IconTypes]: JSX.Element;
} = {
  dropBig: <DropIcon width="2rem" height="2.5rem" />,
  dropSmall: <DropIcon width="1rem" height="0.938rem" />,
  leafBig: <LeafIcon width="3rem" height="3rem" />,
  leafSmall: <LeafIcon width="1.115rem" height="0.773rem" />,
};

const Icons = ({ iconType, className }: IconProps): JSX.Element => {
  return <div className={className}>{iconSizeMap[iconType]}</div>;
};

export default Icons;
