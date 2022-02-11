import React from 'react';

const Button: React.FC<
  Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};

export default Button;
