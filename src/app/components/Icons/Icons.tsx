import React from 'react';
import DropIcon from '../assets/Drop';
import LeafIcon from '../assets/Leaf';

export type IconProps = {
  iconType: 'dropBig' | 'dropSmall' | 'leafBig' | 'leafSmall';
};

const Icons = ({ iconType }: IconProps): JSX.Element => {
  const iconSizeMap = {
    dropBig: <DropIcon width="1.1813rem" height="2.438rem" />,
    dropSmall: <DropIcon width="1rem" height="0.938rem" />,
    leafBig: <LeafIcon width="2.492rem" height="1.813rem" />,
    leafSmall: <LeafIcon width="1.115rem" height="0.773rem" />,
  };

  return <div>{iconSizeMap[iconType]}</div>;
};
export default Icons;
