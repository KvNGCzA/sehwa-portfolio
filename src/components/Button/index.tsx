import './index.scss';
import {MouseEventHandler} from 'react';

interface ButtonProps {
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const Button = ({text, className, handleClick}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`btn btn__regular ${className}`}>
      {text}
    </button>
  );
};
