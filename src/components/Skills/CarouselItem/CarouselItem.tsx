import { FC } from 'react';
import './Carousel.css';

interface CarouselItemProps {
  src: string;
  alt: string;
}

const CarouselItem: FC<CarouselItemProps> = (props): JSX.Element => {
  return (
    <>
      <img src={props.src} alt={props.alt} className="logo-of-technology" />
      <p className="language-name">{props.alt}</p>
    </>
  );
};

export default CarouselItem;
