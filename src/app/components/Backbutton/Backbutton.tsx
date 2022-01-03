import React from 'react';
import BackIcon from '../../assets/SVG/BackIcon';
import '../../App.less';

type BackButtonProps = {
  className?: string;
  onClick: () => void;
};

function Backbutton({ className, onClick }: BackButtonProps): JSX.Element {
  return (
    <div onClick={onClick} className={`backButton ${className}`}>
      <BackIcon width="0.9rem" height="1.5rem" />
    </div>
  );
}
export default Backbutton;
