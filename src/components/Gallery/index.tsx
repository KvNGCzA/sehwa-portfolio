import './index.scss';
import {ReactComponent as ArrowLeft} from '../../assets/icons/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../assets/icons/arrow-right.svg';

export const Gallery = () => {
  return (
    <div className="gallery-container">
      <ArrowLeft className="arrow arrow__left" />
      <div className="image-container" />
      <ArrowRight className="arrow arrow__right" />
    </div>
  );
};
