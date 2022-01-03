import React from 'react';
import '../../App.less';
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
    <div className="header">
      <section className="header__menu">
        <div className="header__menu-left">
          <FontAwesomeIcon icon={faChevronLeft} onClick={onClickLeft} />
          {MenuLeftIcon}
        </div>
        <div className="header__menu-right">{MenuRightIcons}</div>
      </section>
      <h2 className="header__heading">{pageTitle}</h2>
    </div>
  );
}
export default Header;
