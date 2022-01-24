import './index.scss';
import {CSSProperties, MouseEventHandler} from 'react';

interface ButtonProps {
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  styles?: CSSProperties;
  text: string;
}

export const Button = ({text, className, handleClick, styles}: ButtonProps) => {
  return (
    <button
      style={styles}
      onClick={handleClick}
      className={`btn btn__regular ${className}`}>
      {text}
    </button>
  );
};
