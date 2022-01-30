import './index.scss';
import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {ImageProps} from '../Image';
import {ReactComponent as ArrowLeft} from '../../assets/icons/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../assets/icons/arrow-right.svg';

interface GalleryProps {
  images?: ImageProps[];
}

export const Gallery = ({images = []}: GalleryProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const imageContainerRef               = useRef() as MutableRefObject<any>;

  useEffect(() => {
    imageContainerRef.current.scrollTo({
      left:     imageContainerRef.current.offsetWidth * currentImage,
      top:      0,
      behavior: 'smooth'
    });
  }, [currentImage]);

  const nextPage = () => {
    if (currentImage === images?.length - 1) return currentImage;

    setCurrentImage(currentImage + 1);
  };

  const prevPage = () => {
    if (currentImage - 1 < 0) return currentImage;

    setCurrentImage(currentImage - 1);
  };

  return (
    <div className="gallery-container">
      <ArrowLeft
        className="arrow arrow__left" onClick={prevPage} style={{
        opacity: currentImage !== 0 && images?.length ? 1 : 0
      }} />
      <div className="image-container" ref={imageContainerRef}>
        {images?.map(image => <div
          key={image.src}
          className="gallery-image" style={{
          background:     `url('${image.src}') no-repeat center`,
          backgroundSize: 'contain'
        }} />)}
      </div>
      <ArrowRight
        className="arrow arrow__right"
        onClick={nextPage} style={{
        opacity: images?.length && currentImage !== images?.length - 1 ? 1 : 0
      }} />
    </div>
  );
};
