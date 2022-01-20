import ButtonCircle from '../../assets/images/button-circle.svg';
import './index.scss';

interface ButtonProps {
  className: string;
  text: string;
}

export const Button = ({text, className}: ButtonProps) => {
  return (
    <button
      className={`btn btn__regular ${className}`} style={{
      background:     `url('${ButtonCircle}') no-repeat center`,
      backgroundSize: 'contain'
    }}>
      {text}
    </button>
  );
};
