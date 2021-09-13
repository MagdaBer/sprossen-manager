import React from 'react';
import type { ReactNode } from 'react';
import styles from './Typography.module.css';

type TypographyProps = {
  size: 'xs' | 's' | 'm' | 'xsAction' | 'l' | 'xl';
  children: ReactNode;
};

const sizeMap = {
  xs: `${styles.textExtraSmall} ${styles.medium}`,
  xsAction: `${styles.textExtraSmall} ${styles.action}`,
  s: `${styles.textSmall} ${styles.medium}`,
  m: `${styles.textMedium} ${styles.medium}`,
  l: `${styles.textLarge} ${styles.medium}`,
  xl: `${styles.textExtraLarge} ${styles.regular}`,
};

export default function Typography({
  size,
  children,
}: TypographyProps): JSX.Element {
  switch (size) {
    case 'xs':
    case 's':
    case 'xsAction':
      return <p className={sizeMap[size]}>{children}</p>;
    case 'm':
      return <h3 className={sizeMap[size]}>{children}</h3>;
    case 'l':
      return <h2 className={sizeMap[size]}>{children}</h2>;
    case 'xl':
      return <h1 className={sizeMap[size]}>{children}</h1>;
  }
}
