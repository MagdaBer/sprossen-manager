import React from 'react';
import type { ReactNode } from 'react';
import styles from './Typography.module.css';

type TypographyProps = {
  size: 'xs' | 's' | 'm' | 'xsAction' | 'sAction' | 'l' | 'xl';
  children: ReactNode;
  className?: string;
};

const sizeMap = {
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
    case 'xs':
    case 's':
    case 'sAction':
    case 'xsAction':
      return <p className={`${sizeMap[size]} ${className}`}>{children}</p>;
    case 'm':
      return <h3 className={`${sizeMap[size]} ${className}`}>{children}</h3>;
    case 'l':
      return <h2 className={`${sizeMap[size]} ${className}`}>{children}</h2>;
    case 'xl':
      return <h1 className={`${sizeMap[size]} ${className}`}>{children}</h1>;
  }
}
