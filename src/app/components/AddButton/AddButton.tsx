import React from 'react';
import { Link } from 'react-router-dom';
import AddButtonIcon from '../assets/AddButtonIcon';

const AddButton = (): JSX.Element => {
  return (
    <Link to="/app/pages/sprossenfinder">
      <AddButtonIcon />
    </Link>
  );
};
export default AddButton;
