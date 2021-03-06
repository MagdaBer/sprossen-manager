import React from 'react';
import { Link } from 'react-router-dom';
import AddButtonIcon from '../../assets/SVG/AddButtonIcon';

type AddButtonProps = {
  className?: string;
};

const AddButton = ({ className }: AddButtonProps): JSX.Element => {
  return (
    <Link to="/finder" className={className}>
      <AddButtonIcon />
    </Link>
  );
};
export default AddButton;
