import React from 'react';
import { Link } from 'react-router-dom';
import AddButtonIcon from '../assets/AddButtonIcon';

type AddButtonProps = {
  className?: string;
};

const AddButton = ({ className }: AddButtonProps): JSX.Element => {
  return (
    <Link to="/app/pages/sprossenfinder" className={className}>
      <AddButtonIcon />
    </Link>
  );
};
export default AddButton;
