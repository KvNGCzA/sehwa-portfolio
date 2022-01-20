import './index.scss';

interface ButtonProps {
  className?: string;
  text: string;
}

export const Button = ({text, className}: ButtonProps) => {
  return (
    <button
      className={`btn btn__regular ${className}`}>
      {text}
    </button>
  );
};
