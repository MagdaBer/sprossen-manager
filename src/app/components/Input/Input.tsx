import React from 'react';
import type { ReactNode } from 'react';

export type InputProps = {
  children: ReactNode;
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
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
export default Input;
