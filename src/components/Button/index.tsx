import './index.scss';
import {CSSProperties, MouseEventHandler} from 'react';
import {ReactComponent as CircleDark} from '../../assets/images/button-circle.svg';
import {ReactComponent as CircleLight} from '../../assets/images/button-circle-light.svg';

interface ButtonProps {
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isActive?: any;
  isDark?: boolean;
  styles?: CSSProperties;
  text: string;
}

export const Button = ({text, className, handleClick, styles, isActive, isDark = true}: ButtonProps) => {
  return (
    <button
      style={styles}
      onClick={handleClick}
      className={`btn btn__regular ${className}`}>
      {text}
      {isDark ?
        <CircleDark className={`circle circle__dark ${isActive ? 'circle--active' : ''}`} /> :
        <CircleLight
          className={`circle circle__light ${isActive ? 'circle--active' : ''}`} />}
    </button>
  );
};
