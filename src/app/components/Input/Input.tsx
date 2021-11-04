import React from 'react';
import styles from './Input.module.css';

export type InputProps = {
  className?: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: () => void;
};

function Input({
  className,
  type,
  value,
  placeholder,
  onChange,
}: InputProps): JSX.Element {
  return (
    <input
      type={type}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
export default Input;
