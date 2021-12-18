import type { ReactNode } from 'react';
import React from 'react';
import styles from './Typography.module.css';
import { TypographyTypes } from '../../enums/TypographyTypes';

type TypographyProps = {
  size: TypographyTypes;
  children: ReactNode;
  className?: string;
};

const sizeMap: { [size in TypographyTypes]: ReactNode } = {
  xs: `${styles.textExtraSmall} ${styles.medium}`,
  xsAction: `${styles.textExtraSmall} ${styles.action}`,
  s: `${styles.textSmall} ${styles.medium}`,
  sAction: `${styles.textSmall} ${styles.action}`,
  m: `${styles.textMedium} ${styles.medium}`,
  l: `${styles.textLarge} ${styles.medium}`,
  xl: `${styles.textExtraLarge} ${styles.regular}`,
};

export default function Typography({
  size,
  children,
  className,
}: TypographyProps): JSX.Element {
  switch (size) {
    case TypographyTypes.XS:
    case TypographyTypes.S:
    case TypographyTypes.SACTION:
    case TypographyTypes.XSACTION:
      return <p className={`${sizeMap[size]} ${className}`}>{children}</p>;
    case TypographyTypes.M:
      return <h3 className={`${sizeMap[size]} ${className}`}>{children}</h3>;
    case TypographyTypes.L:
      return <h2 className={`${sizeMap[size]} ${className}`}>{children}</h2>;
    case TypographyTypes.XL:
      return <h1 className={`${sizeMap[size]} ${className}`}>{children}</h1>;
  }
}
