import React from 'react';
import style from './Header.module.css';
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faListAlt,
  faUserCircle,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';

export type HeaderProps = {
  pageTitle: string;
  className?: string;
  onClickLeft?: () => void;
  onClickRight?: () => void;
};

function Header({
  pageTitle,
  onClickLeft,
  onClickRight,
}: HeaderProps): JSX.Element {
  const location = useLocation();

  const MenuLeftIcon =
    location.pathname === '/finder' ? (
      <FontAwesomeIcon icon={faCompass} />
    ) : (
      <FontAwesomeIcon icon={faListAlt} />
    );

  const MenuRightIcons =
    location.pathname !== '/mysprouts' ? (
      <>
        <FontAwesomeIcon icon={faUserCircle} />
        <FontAwesomeIcon icon={faChevronRight} onClick={onClickRight} />
      </>
    ) : null;

  return (
    <div className={style.header}>
      <section className={style.menu}>
        <div className={style.left}>
          <FontAwesomeIcon icon={faChevronLeft} onClick={onClickLeft} />
          {MenuLeftIcon}
        </div>
        <div className={style.right}>{MenuRightIcons}</div>
      </section>
      <h2 className={style.pageHeading}>{pageTitle}</h2>
    </div>
  );
}
export default Header;
